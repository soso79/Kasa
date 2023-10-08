import React from 'react';
import "./About.css";
import Banner from "../../components/Banner";
import Photo from "../../assets/img/About.png";

const About = (props) => {
    return (
        <div className='About-can'>
            <Banner image={Photo} titre="" />

        </div>
    );
};

export default About;