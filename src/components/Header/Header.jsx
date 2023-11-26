import React, { useState } from 'react';
import Logo from '../../assets/img/LOGO.png';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // État pour suivre quel lien a été cliqué
    const [selectedLink, setSelectedLink] = useState(null);

    // Fonction pour gérer le clic sur un lien
    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };



    return (
        <header className='Head'>
            <NavLink to="/">
                <div className='Head__Logo'>
                    <img src={Logo} alt='logo kasa' />
                </div>
            </NavLink>
            <div className='Head__Can'>
                <NavLink
                    to="/"
                    className={`Head__Nav__Link ${selectedLink === 'accueil' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('accueil')}
                >
                    <div>Accueil</div>
                </NavLink>
                <NavLink
                    to="/about"
                    className={`Head__Nav__Link ${selectedLink === 'apropos' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('apropos')}
                >
                    <div>A propos</div>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
