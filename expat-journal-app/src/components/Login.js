import React, {useState, useEffect} from 'react'
import '../App';
import * as yup from 'yup'
import schema from '../validation/login_schema'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Card, CardContent, Typography, Button, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


// Material UI Styling
// const useStyles = makeStyles({
//     headTitle: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });


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
                        <Typography variant='h3' component='h3'>Expat Journal</Typography>
                <form className='form-container' onSubmit={onSubmit}>
                <div>
                    <label>Username: 
                        <input className='input' type='username' name='username' onChange={onChange} value={formValues.username} />
                    </label>
                    <br></br>
                    <label>Password: 
                        <input className='input' type='password' name='password' onChange={onChange} value={formValues.password} />
                    </label>
                </div>
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
                <div>
                    <Button className='homeLoginBtn' disabled={disabled}>Login</Button>
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
