import React from 'react';
import LogementsData from '../assets/logements.json';
import Header from '../components/Header';
import '../styles/Logements.css';


const Logements = (props) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <h1>Liste des Logements</h1>
            <ul>
                {LogementsData.map((logement) => (
                    <li className='Logements-liste' key={logement.id}>
                        <h2>{logement.title}</h2>
                        <p>{logement.description}</p>
                        <img src={logement.cover} alt={logement.title} />
                        {/* Ajoutez ici le reste des informations du logement */}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Logements;