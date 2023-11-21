import React from 'react';
import Logo from '../../assets/img/LOGO.png'
import './Footer.css'
const Footer = (props) => {
    return (
        <div className='Footer'>

            <img src={Logo} alt='logo kasa' className='Footer-Logo' />
            <p className='Footer-Text'> © 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;