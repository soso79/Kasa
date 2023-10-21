import React from 'react';
import Logo from '../../assets/img/LOGO.png';
import './Header.css'

const Header = (props) => {
    return (
        <header className='head'>
            <div className='head-logo'>
                <img src={Logo} alt='logo kasa' />
            </div>
            <div>Acceuil</div>
            <div>A propos</div>


        </header>
    );
}

export default Header;