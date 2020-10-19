import React, { useContext } from 'react'; 
import { ContextObject } from '../context/context';
import HeaderPostButton from './HeaderPostButton';
import Post from './Post';

const Posts = () => {
    const { posts } = useContext(ContextObject);
    return(
        <>
            <HeaderPostButton />
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
            <div className='image-container'>
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
            <img src='https://images.unsplash.com/photo-1447755086558-cb9e3830d677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' />
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
            <img src='https://images.unsplash.com/photo-1585567512124-dbfaa0e7eee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
           

            </div>
        </>
    );
};

export default Posts;