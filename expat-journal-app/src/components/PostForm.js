import React, { useState } from 'react';

const initialValues = {
    title = '',
    body = '',
    imageUrl = ''
};

const PostForm = () => {
    const [formValues, setFormValues] = useState(initialValues);

    handleChanges = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
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
                <label htmlFor='body'>Body</label>
                <textarea
                    name='body'
                    id='body'
                    value={formValues.body}
                    onChange={handleChanges}
                />
                <label htmlFor='imageUrl'>Image</label>
                <input
                    type='text'
                    id='imageUrl'
                    value={formValues.imageUrl}
                    onChange={handleChanges}
                />
                <button>Add Post</button>
            </form>
        </>
    );
};

export default PostForm;