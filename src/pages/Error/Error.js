import React from 'react';
import '../styles/Error.css'
import Header from '../../components/Header';
import photo from '../assets/404.png'
import Footer from '../../components/Footer';

const Error = (props) => {
    return (

        <div className='Error-Can'>
            <Header />
            <div className='Test'>
                <img src={photo} alt='page erreur' className='Error' />
                <p className='Error-Text'>Oups! La page que vous demandez n existe pas.</p>
            </div>
            <Footer />

        </div>

    );
};

export default Error;