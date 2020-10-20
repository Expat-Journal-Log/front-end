import React from 'react'

function HeaderPostButton(props) {
    const { editing } = props;
console.log(editing);
    return (
        <div>
            {editing === 'true' ? (
                <>
                    <button>Update Post</button>
                    <button>Delete Post</button>
                </>
            ) : (
                <button className='createPostButton'>create a post</button>
            )}
        </div>
    )
}

export default HeaderPostButton
