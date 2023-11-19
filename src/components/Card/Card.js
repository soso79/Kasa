import React, { useState } from 'react';
import './Card.css';
import Logements from '../../components/Logements/Logements';
import LogementsData from '../../assets/logements.json';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    // État local pour suivre la carte de logement actuellement cliquée
    const [selectedLogement, setSelectedLogement] = useState(null);

    // Fonction pour gérer le clic sur une carte de logement
    const handleCardClick = (logement) => {
        setSelectedLogement(logement);
        // Vous pouvez effectuer d'autres actions en réponse au clic ici
    };

    return (
        <div className='appartement-can'>
            <ul className='appartement-card'>
                {LogementsData.map((logement) => (
                    <li className='appartement-item' key={logement.id}>
                        <NavLink to={`/logement/${logement.id}`}>
                            <div
                                className={`card ${logement === selectedLogement ? 'selected' : ''}`}
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
