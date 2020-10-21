import React from 'react'
import { Link, useParams } from 'react-router-dom'

function HeaderPostButton(props) {
    // const classes = useStyles()

    const { editing } = props;

    const { id } = useParams();

    return (
        <div>
            {editing === 'true' ? (
                <>
                    <Link to={`/edit-post/${id}`}>
                        <button>Update Post</button>
                    </Link>
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
