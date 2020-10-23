import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Menu, Button, MenuItem } from '@material-ui/core';
import '../styles/post.css';


function HeaderPostButton(props) {
    // const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);

    const { editing } = props;

    const { id } = useParams();

    const logout = () => {
        localStorage.removeItem('token');

        window.location.pathname = '/';
    };

    const handleClick = e => {
        setAnchorEl(e.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='menu-container'>
                {/*This is to be used in the mobile view*/}
                <Button aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id='menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Create Post</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </div>
            <div className='flex-container1'>
                {(editing === 'true' && localStorage.getItem('token')) ? (
                    <>
                        <Link to={`/edit-post/${id}`} className='editLink'>
                            <div className='editButtonText'>
                            <EditRoundedIcon fontSize='large' className='createPostButton' >Edit Post</EditRoundedIcon>
                            <p className='createPostText'>Edit <br></br>Post</p>
                            </div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to='/create-post' className='link'>
                            <div className='buttonStyle' >
                                
                        <PostAddIcon fontSize='large' className='createPostButton buttonStyle '>create a post</PostAddIcon>
                            <p className='createPostText'>Create <br></br>Post</p>
                            </div>
                        </Link>
                        <div>
                            <ExitToAppIcon
                            className='logout buttonStyle'
                            onClick={logout}
                            >
                                Logout
                            </ExitToAppIcon>
                            <p className='createPostText'>Log <br></br>out</p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default HeaderPostButton
