import React from 'react';

const Post = (props) => {
    const { post } = props;

    return(
        <>
            <div className='post'>
                <h2>{post.title}</h2>
                <img src={`${post.imageURL}`} className={`${post.imageURL ? '':'hide'}`}/>
                <p>{post.description}</p>
            </div>
        </>
    );
};

export default Post;