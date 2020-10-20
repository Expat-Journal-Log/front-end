import React from 'react'
import {Link} from 'react-router-dom'

function HeaderPostButton() {
    return (
        <div className='createPostButton'>
                <p className='createPostText'>create a post </p>
                <Link to='/createpost'><img src="https://img.icons8.com/ios/50/000000/plus.png"/></Link>
        </div>
    )
}

export default HeaderPostButton
