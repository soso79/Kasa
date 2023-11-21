import React from 'react';
import './Error.scss';
import { NavLink } from "react-router-dom";
import Header from '../../components/Header/Header.jsx';
import Photo from '../../assets/404.png';
import Footer from '../../components/Footer/Footer.jsx';

const Error = () => {
    return (

        <div className='Error'>
            <Header />
            <div className='Error__Can'>
                <div className='Error__Logo'>
                    <img src={Photo} alt='page erreur' className='Error__Img' />
                    <p className='Error__Text'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
                </div>

                <NavLink to="/" className="Error__Link">Retourner sur la page d’accueil</NavLink>
            </div>
            <Footer />


        </div>


    );
};

export default Error;