import React from 'react';
import "./About.css";
import BannerAbout from '../../components/BannerAbout/BannerAbout.jsx';
import Collapse from '../../components/Collapse/Collapse'
import data from '../../assets/collapse.json'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';





const About = (props) => {
    return (
        <div className='About' >

            <Header />

            <div className='AboutCan'>
                <BannerAbout />

                <Collapse data={data} />
            </div>
            <Footer />
        </div>

    );
};

export default About;