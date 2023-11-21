import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/LOGO.png';
import './Header.scss';
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
            // on  effectue d'autres actions en réponse au clic ici
        } else if (selectedLink === 'apropos') {
            // Code à exécuter lorsque le lien "A propos" est cliqué
            console.log('Le lien "A propos" a été cliqué.');

        }
    }, [selectedLink]); // L'effet se déclenche lorsque selectedLink change

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
