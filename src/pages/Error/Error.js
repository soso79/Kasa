import React from 'react';
import './Error.css';
import { NavLink } from "react-router-dom";
import Header from '../../components/Header/Header';
import Photo from '../../assets/404.png';
import Footer from '../../components/Footer';

const Error = (props) => {
    return (

        <div className='Error-Can'>
            <Header />

            <div className='ErrorLogo'>
                <img src={Photo} alt='page erreur' className='Error' />
                <p className='Error-Text'>Oups! La page que vous demandez n existe pas.</p>
            </div>
            <NavLink to="/" className="Error-Link">Retourner sur la page d’accueil</NavLink>
            <Footer />


        </div>


    );
};

export default Error;