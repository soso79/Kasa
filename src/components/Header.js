import React from 'react';
import Logo from '../assets/img/LOGO.png';
import '../styles/Header.css'
import Navigation from './Navigation';
const Header = (props) => {
    return (
        <header className='head'>
            <img src={Logo} alt='logo kasa' className='img-logo' />
            <Navigation />
        </header>
    );
}

export default Header;