import React from 'react';
import './Card.css';
import Logements from '../../components/Logements/Logements';
import LogementsData from '../../assets/logements.json';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='appartement-card'>
            {LogementsData.map((logement) => (
                <NavLink to={`/logement/${logement.id}`} key={logement.id}>
                    <Logements
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}


                    />

                </NavLink>
            ))}

        </div>
    );
};

export default Card;