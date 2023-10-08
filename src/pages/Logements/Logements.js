import React from 'react';
import LogementsData from '../../assets/logements.json';
import Header from '../../components/Header';
import './Logements.css';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


const Logements = (props) => {
    return (
        <div>
            <div>
                <Header />
                <Banner />
            </div>

            <section className='Logements-can'>
                {LogementsData.map((logement) => (
                    <Link to={`/logement/${logement.id}`} key={logement.id} >



                        <div className='Logements-liste' key={logement.id}>
                            <h2>{logement.title}</h2>

                            <img className='Logements-image' src={logement.cover} alt={logement.title} />

                        </div>
                    </Link>
                ))}
            </section>
            <Footer />
        </div>

    );
};

export default Logements;