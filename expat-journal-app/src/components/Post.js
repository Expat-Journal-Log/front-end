import React from 'react';


const Post = (props) => {
    const { post } = props;
    
    return(
        <>
        
            <h1>Post here...</h1>
            <div>
                <h2>{post.title}</h2>
                <img href={post.img_url} />
                <p>{post.body}</p>
            </div>
        </>
    );
};

export default Post;