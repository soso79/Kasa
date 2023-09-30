import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;