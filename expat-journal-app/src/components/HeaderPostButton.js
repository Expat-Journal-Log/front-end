import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';


function HeaderPostButton(props) {
    // const classes = useStyles()

    const { editing } = props;

    const { id } = useParams();

    return (
        <div>
            {editing === 'true' ? (
                <>
                    <Link to={`/edit-post/${id}`}>
                        <button>Edit Post</button>
                    </Link>
                </>
            ) : (
                <Link to='/create-post' className='link'>
                    <div className='buttonText'>
                    <PostAddIcon fontSize='large' className='createPostButton'>create a post</PostAddIcon>
                    <p>Create <br></br>Post</p>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default HeaderPostButton
