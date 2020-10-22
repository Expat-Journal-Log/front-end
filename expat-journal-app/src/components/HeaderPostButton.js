import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
// import EditRoundedIcon from '@material-ui/icons/EditRounded';
import '../styles/post.css';


function HeaderPostButton(props) {
    // const classes = useStyles()

    const { editing } = props;

    const { id } = useParams();

    return (
        <div>
            {editing === 'true' ? (
                <>
                    <Link to={`/edit-post/${id}`} className='editLink'>
                        <div className='editButtonText'>
                        {/* <EditRoundedIcon className='editPostButton' fontSize='large'>Edit Post</EditRoundedIcon> */}
                        <p>Edit <br></br>Post</p>
                        </div>
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
