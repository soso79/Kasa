import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx';
import Footer from '../../components/Footer/Footer.jsx'




const Home = () => {


    return (

        <div className='Home'>
            <Header />
            <div className='Home__Container'>

                <Banner />
                <Card />
            </div>
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