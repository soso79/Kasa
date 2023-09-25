import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>acceuil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>a propos</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;