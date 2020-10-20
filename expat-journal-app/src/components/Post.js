import React from 'react';
import HeaderPostButton from './HeaderPostButton';

const Post = (props) => {
    const { post } = props;

    return(
        <>
            <HeaderPostButton editing='true' />
            <div>
                <h2>{post.title}</h2>
                <img href={post.img_url} />
                <p>{post.body}</p>
            </div>
        </>
    );
};

export default Post;