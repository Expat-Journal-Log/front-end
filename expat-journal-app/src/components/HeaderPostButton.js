import React from 'react'
import { Link } from 'react-router-dom'

function HeaderPostButton(props) {
    const { editing } = props;

    return (
        <div>
            {editing === 'true' ? (
                <>
                    <button>Update Post</button>
                    <button>Delete Post</button>
                </>
            ) : (
                <Link to='/create-post'>
                    <button className='createPostButton'>create a post</button>
                </Link>
            )}
        </div>
    )
}

export default HeaderPostButton
