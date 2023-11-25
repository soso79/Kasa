import React from 'react';
import './Error.scss';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Erreur from '../../components/Erreur/Erreur.jsx';

const Error = () => {
    return (

        <div className='Error'>
            <Header />
            <div className='Error__Can'>
                <Erreur />
            </div>
            <Footer />


        </div>


    );
};

export default Error;