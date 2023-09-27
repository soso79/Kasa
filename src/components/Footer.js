import React from 'react';
import Logo from '../assets/LOGO.png'
import '../styles/Footer.css'
const Footer = (props) => {
    return (
        <div className='Footer'>
            <img src={Logo} alt='logo kasa' className='footer-logo' />
            <p className='Footer-Text'> © 2020 Kasa. All rights reservedAll rights reserved</p>
        </div>
    );
};

export default Footer;