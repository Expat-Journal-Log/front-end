import React from 'react';
import HeaderPostButton from './HeaderPostButton';

const Post = (props) => {
    const { post } = props;

    return(
        <>
            <HeaderPostButton editing='true' />
            <div>
                <h2>{post.title}</h2>
                <img src={`${post.imageURL}`} className={`${post.imageURL ? '':'hide'}`}/>
                <p>{post.description}</p>
            </div>
        </>
    );
};

export default Post;