import React from 'react';
import '../styles/Error.css';
import { NavLink } from "react-router-dom";


const Error = (props) => {
    return (

        <div className='Error-Can'>


            <h1 className='ErrorTitle'>404</h1>
            <p className='ErrorText'>Oups! La page que vous demandez n existe pas.</p>
            <NavLink to="/" className="ErrorLink">Retourner sur la page d’accueil</NavLink>



        </div>

    );
};

export default Error;