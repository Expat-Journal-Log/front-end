import React, {useState, useEffect} from 'react'
import '../App';
import * as yup from 'yup'
import schema from '../validation/login_schema'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Card, CardContent, Typography, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Styling

const useStyles = makeStyles({
    input: {
        margin: '10px 0'
    },
    loginBtn: {
        background: '#12c9c9',
        border: 0,
        borderRadius: 3,
        height: 35,
        padding: '0 10px',
    },
    title: {
        padding: '30px 30px 0px 30px'
    },
    subTitle: {
        paddingBottom: '30px',
        fontStyle: 'italic'
    }
})

const initialFormValues = {
    username: '',
    password: ''
  }
  const initialFormErrors = {
    username: '',
    password: ''
  }

const initialDisabled = true;
  
function Login() {
    const classes = useStyles()

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const formSubmit = () => {
        axios
            .post('https://reqres.in/api/users', formValues)
            .then(res => {
                console.log(res)
                console.log('login successful!')
            })
            .catch(err => {
                console.log(err)
                console.log('login failed')
            })
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        formSubmit();
      };
    
    const onChange = (evt) => {
        const { name, value } = evt.target;
        inputChange(name, value);
      };

    const inputChange = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                console.log(err)
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                })
            })
            setFormValues({
                ...formValues,
                [name]: value,
            })
    }


    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);


    return (
      
        <div className='page'>
            <div className='container'>
                <Card>
                    <CardContent>
                        <Typography className={classes.title} variant='h3' component='h3'>Expat Journal</Typography>
                        <Typography variant='subtitle1' className={classes.subTitle}>Share your Adventures.<br></br> Tell your Story.</Typography>
                <form className='form-container' onSubmit={onSubmit}>
                <div>
                <TextField 
                    className={classes.input} 
                    id="standard-basic"
                    type='password' 
                    label="Username" 
                    name='username' 
                    value={formValues.username} 
                    onChange={onChange} 
                    required
                />
                    <br></br>
                    <TextField 
                    className={classes.input} 
                    id="standard-basic" 
                    label="Password" 
                    name='password' 
                    value={formValues.password} 
                    onChange={onChange} 
                    required
                />
                </div>
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
                <div>
                    <Button className={classes.loginBtn} variant="contained" disabled={disabled} color="primary">Login</Button>
                    <p>OR</p>
                    <Link to='/register'>Register</Link>
                </div>                
                </form>
                    </CardContent>
                </Card>
            </div>
            </div>
    )
}

export default Login;
