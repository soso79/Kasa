import React from 'react';
import './Error.css';
import { NavLink } from "react-router-dom";
import Header from '../../components/Header/Header';
import Photo from '../../assets/404.png';
import Footer from '../../components/Footer';

const Error = () => {
    return (

        <div className='Error-Can'>
            <Header />
            <div className='Tony'>
                <div className='ErrorLogo'>
                    <img src={Photo} alt='page erreur' className='Error' />
                    <p className='Error-Text'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
                </div>

                <NavLink to="/" className="Error-Link">Retourner sur la page d’accueil</NavLink>
            </div>
            <Footer />


        </div>


    );
};

export default Error;