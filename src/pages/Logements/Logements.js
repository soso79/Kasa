import React from 'react';
import LogementsData from '../../assets/logements.json';

import './Logements.css';

import { Link } from 'react-router-dom';



const Logements = (props) => {
    return (
        <div>
            <div>

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

        </div>

    );
};

export default Logements;