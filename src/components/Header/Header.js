import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/LOGO.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // État pour suivre quel lien a été cliqué
    const [selectedLink, setSelectedLink] = useState(null);

    // Fonction pour gérer le clic sur un lien
    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    // useEffect pour effectuer des actions en réponse au clic sur les liens
    useEffect(() => {
        if (selectedLink === 'accueil') {
            // Code à exécuter lorsque le lien "Accueil" est cliqué
            console.log('Le lien "Accueil" a été cliqué.');
            // Vous pouvez effectuer d'autres actions en réponse au clic ici
        } else if (selectedLink === 'apropos') {
            // Code à exécuter lorsque le lien "A propos" est cliqué
            console.log('Le lien "A propos" a été cliqué.');
            // Vous pouvez effectuer d'autres actions en réponse au clic ici
        }
    }, [selectedLink]); // L'effet se déclenche lorsque selectedLink change

    return (
        <header className='head'>
            <NavLink to="/">
                <div className='head-logo'>
                    <img src={Logo} alt='logo kasa' />
                </div>
            </NavLink>
            <div className='test'>
                <NavLink
                    to="/"
                    className={`head-nav-link ${selectedLink === 'accueil' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('accueil')}
                >
                    <div>Accueil</div>
                </NavLink>
                <NavLink
                    to="/about"
                    className={`head-nav-link ${selectedLink === 'apropos' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('apropos')}
                >
                    <div>A propos</div>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
