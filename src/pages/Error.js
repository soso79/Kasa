import React from 'react';
import '../styles/Error.css'
import Header from '../components/Header';
import photo from '../assets/404.png'

const Error = (props) => {
    return (

        <div>
            <Header />
            <img src={photo} alt='page erreur' className='Error' />
        </div>

    );
};

export default Error;