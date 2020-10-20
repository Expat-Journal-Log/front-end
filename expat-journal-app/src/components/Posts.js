import React, { useContext } from 'react'; 
import { ContextObject } from '../context/context';
import HeaderPostButton from './HeaderPostButton';
import Post from './Post';

const Posts = () => {
    const data = useContext(ContextObject);

    return(
        <div>
            <HeaderPostButton editing='false' />
            {data.postState.posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;
