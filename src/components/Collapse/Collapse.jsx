import React, { useState } from 'react';
import './Collapse.scss';
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
        //Utilisation de la classe CSS "Collapse" avec conditionnelle basée sur la longueur de "data"
        <div className={`Collapse${data.length === 2 ? 'Two' : ''}`}>
            {data.map((collapse, index) => (
                // À chaque itération, "collapse" contient un élément de "data" et "index" est l'indice actuel
                <div className="Collapse__Container" key={index}>
                    <div className="Collapse__Can" onClick={() => toggleCollapse(index)}>
                        <h3 className="Collapse__Tittle">{collapse.title}</h3>
                        {/* Changer l'icône en fonction de l'état d'ouverture */}
                        <img className='Collapse__Img' src={openIndexes.includes(index) ? ArrowUp : ArrowDown} alt="Arrow" />
                    </div>
                    {/* Affiche le texte de la section uniquement si elle est ouverte */}
                    {openIndexes.includes(index) && (
                        <div className="Collapse__Text">{collapse.text}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Collapse;
