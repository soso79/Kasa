import React from 'react';
import "./About.css";
import Photo from '../../assets/img/About.png'
import Collapse from '../../components/Collapse/Collapse'
import data from '../../assets/collapse.json'



const About = (props) => {
    return (
        <div className='AboutCan'>

            <img className='BannerAbout' alt='Paysage' src={Photo} />

            <Collapse data={data} />


        </div>
    );
};

export default About;