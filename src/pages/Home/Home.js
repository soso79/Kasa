import React from 'react';
import LogementsData from '../../assets/logements.json';
import Header from '../../components/Header';
import './Home.css';

import { NavLink } from 'react-router-dom';




const Home = (props) => {
    return (

        <div className='Acceuil'>
            <Header />

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





        </div>
    );
};

export default Home;