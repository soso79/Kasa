import React, { useState } from 'react';
import './Collapse.css';
import ArrowDown from '../../assets/ArrowDown.png';
import ArrowUp from '../../assets/ArrowUp.png'

function Collapse({ data }) {
    // État local pour suivre les indices des sections ouvertes
    const [openIndexes, setOpenIndexes] = useState([]);

    // Fonction pour basculer l'état d'ouverture/fermeture d'une section
    const toggleCollapse = (index) => {
        setOpenIndexes(openIndexes.includes(index)
            ? openIndexes.filter((i) => i !== index) // Si ouvert, le retirer
            : [...openIndexes, index] // Si fermé, l'ajouter
        );
    };

    return (
        <div className={`CollapseHome${data.length === 2 ? 'Two' : ''}`}>
            {data.map((collapse, index) => (
                <div className="ContCollapse" key={index}>
                    <div className="ContTittle" onClick={() => toggleCollapse(index)}>
                        <h3 className="CollapseTittle">{collapse.title}</h3>
                        {/* Changer l'icône en fonction de l'état d'ouverture */}
                        <img src={openIndexes.includes(index) ? ArrowUp : ArrowDown} alt="Arrow" />
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
