import React from 'react';
import Logo from '../assets/LOGO.png';
import '../styles/Header.css'
const Header = (props) => {
    return (
        <header className='head'>
            <img src={Logo} alt='logo kasa' className='img-logo' />
            <nav className='navi'>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/a-propos">À Propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;