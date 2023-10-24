import React from 'react';
import Logo from '../../assets/img/LOGO.png';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <header className='head'>
            <NavLink to="/">
                <div className='head-logo'>
                    <img src={Logo} alt='logo kasa' />
                </div>
            </NavLink>
            <NavLink to="/">
                <div>Acceuil</div>
            </NavLink>
            <NavLink to="/about">
                <div>A propos</div>
            </NavLink>


        </header>
    );
}

export default Header;