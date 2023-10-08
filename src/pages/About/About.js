import React from 'react';
import "./About.css";

import Photo from "../../assets/img/About.png";

const About = (props) => {
    return (
        <div className='About-can'>
            <img className='Banner-About' alt='Paysage' src={Photo} />

        </div>
    );
};

export default About;