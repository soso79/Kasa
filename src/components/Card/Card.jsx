import React, { useState } from 'react';
import './Card.scss';
import Logements from '../Logements/Logements';
import LogementsData from '../../assets/logements.json';
import { NavLink } from 'react-router-dom';

const Card = () => {
    // État local pour suivre la carte de logement actuellement cliquée
    const [selectedLogement, setSelectedLogement] = useState(null);

    // Fonction pour gérer le clic sur une carte de logement
    const handleCardClick = (logement) => {
        setSelectedLogement(logement);

    };

    return (
        <div className='Card'>
            <ul className='Card__Can'>
                {LogementsData.map((logement) => (
                    <li className='Card__Item' key={logement.id}>
                        <NavLink to={`/logement/${logement.id}`}>
                            <div
                                className={`Card__Selected ${logement === selectedLogement ? 'selected' : ''}`}
                                onClick={() => handleCardClick(logement)} // Gestionnaire d'événements de clic
                            >
                                <Logements
                                    key={logement.id}
                                    id={logement.id}
                                    title={logement.title}
                                    cover={logement.cover}
                                />
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
