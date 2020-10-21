import React from 'react'
import logo from '../assets/expatLogo.png'


function Header() {
    return (
        <div className={`${(window.location.pathname === '/' || window.location.pathname === '/register') ? 'hide' : ''}`}>
            <header className='header'>
                <img src={logo} />
                <h2>Expat Journal</h2>
            </header>
        </div>
    )
}

export default Header
