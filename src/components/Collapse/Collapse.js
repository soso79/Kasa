import React, { useState } from 'react';
import './Collapse.css';
import ArrowDown from '../../assets/ArrowDown.png';

function Collapse({ data }) {
    // État local pour suivre les indices des sections ouvertes
    const [openIndexes, setOpenIndexes] = useState([]);

    // Fonction pour basculer l'état d'ouverture/fermeture d'une section
    const toggleCollapse = (index) => {
        if (openIndexes.includes(index)) {
            // Si la section est déjà ouverte, la fermer en retirant son index de openIndexes
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            // Si la section est fermée, l'ouvrir en ajoutant son index à openIndexes
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        // Conteneur principal avec une classe CSS conditionnelle en fonction de la longueur de data
        <div className={`CollapseHome${data.length === 2 ? 'Two' : ''}`}>
            {data.map((collapse, index) => (
                <div className="ContCollapse" key={index}>
                    <div className="ContTittle" onClick={() => toggleCollapse(index)}>
                        <h3 className="CollapseTittle">{collapse.title}</h3>
                        <img src={ArrowDown} alt="Arrow" />
                    </div>

                    {/* Affiche le texte de la section uniquement si elle est ouverte */}
                    {openIndexes.includes(index) && (
                        <div className="CollapseText">{collapse.text}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Collapse;
