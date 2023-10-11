import React from 'react';
import LogementsData from '../../assets/logements.json';
import Header from '../../components/Header';

import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';




const Home = (props) => {
    return (

        <div>
            <Header />

            <div className='Logements-Can'>
                {LogementsData.map((logement) => (
                    <Link to={`/logement/${logement.id}`} key={logement.id}>
                        <div className='Logements-liste' key={logement.id}>
                            <h2>{logement.title}</h2>
                            <p>{logement.description}</p>
                            <img src={logement.cover} alt={logement.title} />
                        </div>
                    </Link>
                ))}
            </div>





        </div>
    );
};

export default Home;