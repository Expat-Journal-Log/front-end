import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import { ContextObject } from '../context/context';

const initialValues = {
    title: '',
    description:  '',
    imageURL: ''
};

const PostForm = (props) => {
    const { editing } = props;

    const { postState, setPostState } = useContext(ContextObject);
    
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory();

    const handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

     const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/posts', formValues)
            .then(res => {
                console.log('PostForm: handleSubmit: DT: ', res);
                
                setPostState({
                    ...postState,
                    posts: [...postState.posts, res.data]
                });

                push('/posts');
            })
            .catch(err => console.error('PostForm: handleSubmit: DT: Error: ', err));
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    value={formValues.title}
                    onChange={handleChanges}
                />
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    id='description'
                    value={formValues.description}
                    onChange={handleChanges}
                />
                <label htmlFor='imageURL'>Image</label>
                <input
                    type='text'
                    id='imageURL'
                    name='imageURL'
                    value={formValues.imageURL}
                    onChange={handleChanges}
                />
                <button>{editing === 'true' ? 'Update Post' : 'Add Post'}</button>
            </form>
        </>
    );
};

export default PostForm;