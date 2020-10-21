import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const PostPage = (props) => {
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/posts/${id}`)
            .then(res => {
                console.log('Post: useEffect: DT: ', res);

                setPost(res.data);
            })
            .catch(err => console.error('Post: useEffect: DT: Error: ', err));
    }, []);

    return(
        <>
            <div>
                <h2>{post.title}</h2>
                <img src={`${post.imageURL}`} className={`${post.imageURL ? '':'hide'}`}/>
                <p>{post.description}</p>
            </div>
        </>
    );
};

export default PostPage;