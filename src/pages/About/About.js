import React from 'react';
import "./About.css";
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse'
import data from '../../assets/collapse.json'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';





const About = (props) => {
    return (
        <div className='About' >

            <Header />

            <section className='AboutCan'>
                <Banner />

                <Collapse data={data} />
            </section>
            <Footer />
        </div>

    );
};

export default About;