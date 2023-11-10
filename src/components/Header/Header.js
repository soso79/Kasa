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
            <div className='test'>
                <NavLink to="/" className="head-nav-link">
                    <div>Accueil</div>
                </NavLink>
                <NavLink to="/about" className="head-nav-link">
                    <div>A propos</div>
                </NavLink>
            </div>



        </header>
    );
}

export default Header;