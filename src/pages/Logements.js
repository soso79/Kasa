import React from 'react';
import LogementsData from '../assets/logements.json';

import Navigation from '../components/Navigation';

const Logements = (props) => {
    return (
        <div>
            <h1>Liste des Logements</h1>
            <ul>
                {LogementsData.map((logement) => (
                    <li key={logement.id}>
                        <h2>{logement.title}</h2>
                        <p>{logement.description}</p>
                        <img src={logement.cover} alt={logement.title} />
                        {/* Ajoutez ici le reste des informations du logement */}
                    </li>
                ))}
            </ul>
            <Navigation />
        </div>
    );
};

export default Logements;