import React from 'react'
import logo from '../assets/expatLogLogo.svg';
import HeaderPostButton from '../components/HeaderPostButton';
import '../App';

function Header() {
    return (
        <div className={`${(window.location.pathname === '/' || window.location.pathname === '/register') ? 'hide' : ''}`}>
            <header className='header'>
                <img src={logo} />
                <h2>Expat Journal</h2>
                <HeaderPostButton editing='false' />
            </header>
        </div>
    )
}

export default Header
