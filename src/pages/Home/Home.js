import React from 'react';


import './Home.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer'




const Home = (props) => {


    return (

        <div className='titi'>
            <Header />
            <section className='Container'>

                <Banner />
                <Card />
            </section>
            <Footer />



        </div>

    );
};

export default Home;


/*
<div className='Card'>
                {LogementsData.map((logement) => (
                    <NavLink to={`/logement/${logement.id}`} key={logement.id}>

                        <div className='Vignettes'>

                            <h2 className='Vignettes-Tittle'>{logement.title}</h2>

                            <img className='Image-Card' src={logement.cover} alt={logement.title} />
                        </div>
                    </NavLink>
                ))}
            </div>
            */

/*
            <div>
            <Header />
            <section className='Container'>
                <Banner />
                <Card />
            </section>
            <Footer />



        </div>
        */

/*
 <h2 className='Vignettes-Tittle'>{logement.title}</h2>

                     <img className='Image-Card' src={logement.cover} alt={logement.title} />
                     */