import React from 'react';
import Logo from '../../assets/img/LOGO.png'
import './Footer.scss'
const Footer = () => {
    return (
        <div className='Footer'>

            <img src={Logo} alt='logo kasa' className='Footer__Logo' />
            <p className='Footer__Text'> © 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;