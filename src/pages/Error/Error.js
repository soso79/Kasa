import React from 'react';
import './Error.css';
import { NavLink } from "react-router-dom";
import Header from '../../components/Header';


const Error = (props) => {
    return (

        <div className='Error-Can'>
            <Header />

            <h1 className='Error-Title'>404</h1>
            <p className='Error-Text'>Oups! La page que vous demandez n existe pas.</p>
            <NavLink to="/" className="Error-Link">Retourner sur la page d’accueil</NavLink>



        </div>

    );
};

export default Error;