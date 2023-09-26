import React from 'react';
import photo from '../assets/IMG.png'
import '../styles/Banner.css'
const Banner = (props) => {
    return (
        <div className='img-banner'>
            <img src={photo} alt='banniere' className='img-ban' />
        </div>
    );
};

export default Banner;