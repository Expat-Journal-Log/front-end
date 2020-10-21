import React, { useState } from 'react';
import {TextField, makeStyles, Typography, Button} from '@material-ui/core';

const initialValues = {
    title: '',
    body:  '',
    imageUrl: ''
};

const useStyles = makeStyles({
    title: {
        width: '30%',
        marginTop: '30px'
    },
    btn: {
        margin: '30px',
        width: '10%'
    },
    textbox: {
        width: '30%'
    },
    imgUrl: {
        margin: '20px',
        width: '30%'
    }
})

const PostForm = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const classes = useStyles()

    const handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

     const handleSubmit = e => {
        e.preventDefault();
    };

    return(
        <>
            <Typography component='h3' variant='h4'>Create a New Post</Typography>
            <form className='form-container' noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
                    className={classes.title} 
                    id="standard-basic" 
                    label="Title" 
                    name='title' 
                    value={formValues.title} 
                    onChange={handleChanges} 
                    required
                />
                <br></br>
                <TextField 
                    className={classes.textbox} 
                    id='outlined-basic' 
                    label="Body" 
                    multiline 
                    name='body' 
                    value={formValues.body} 
                    onChange={handleChanges}
                    required
                    />
                <br></br>
                <TextField 
                    className={classes.imgUrl} 
                    id="standard-basic" 
                    label="imageURL"
                    required
                    />
                <br></br>
                <Button className={classes.btn} variant="contained" color="primary">Create Post</Button>
            </form>
        </>
    );
};

export default PostForm;


// <label htmlFor='title'>Title</label>
//                 <input
//                     type='text'
//                     name='title'
//                     id='title'
//                     value={formValues.title}
//                     onChange={handleChanges}
//                 />
//                 <label htmlFor='body'>Body</label>
//                 <textarea
//                     name='body'
//                     id='body'
//                     value={formValues.body}
//                     onChange={handleChanges}
//                 />
//                 <label htmlFor='imageUrl'>Image</label>
//                 <input
//                     type='text'
//                     id='imageUrl'
//                     value={formValues.imageUrl}
//                     onChange={handleChanges}
//                 />
//                 <button>Add Post</button>