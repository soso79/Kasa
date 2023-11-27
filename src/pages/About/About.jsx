import React from 'react';
import "./About.scss";
import BannerAbout from '../../components/BannerAbout/BannerAbout.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx'
import data from '../../assets/collapse.json'
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';





function About() {
    return (
        <div className='About' >

            <Header />

            <div className='About__Can'>
                <BannerAbout />
                <div className='About__Coll'>
                    <Collapse data={data} />
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default About;