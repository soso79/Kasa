import React from 'react';
import photo from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import '../styles/Banner.css'
const Banner = (props) => {
    return (
        <div className='img-banner'>
            <img src={photo} alt='banniere' classname='img-ban' style={{ width: '1670px', height: '123px' }} />
        </div>
    );
};

export default Banner;