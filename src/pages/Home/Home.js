import React from 'react';
import LogementsData from '../../assets/logements.json';
import Header from '../../components/Header';
import './Home.css';

import { Link } from 'react-router-dom';




const Home = (props) => {
    return (

        <div className='Acceuil'>
            <Header />

            <div className='Card'>
                {LogementsData.map((logement) => (
                    <Link to={`/logement/${logement.id}`} key={logement.id}>

                        <div className='Vignettes'>
                            <h2>{logement.title}</h2>

                            <img className='Image-Card' src={logement.cover} alt={logement.title} />
                        </div>
                    </Link>
                ))}
            </div>





        </div>
    );
};

export default Home;