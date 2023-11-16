

import React from 'react';
import "./Tag.scss";

import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

const Tag = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);




    // Pour afficher les tags avec des classes CSS
    const tagsList = logement.tags.map((tag, index) => (
        <li key={index} className="tag">{tag}</li>
    ));

    return (


        <div className="Logements-tag">
            <h2 className='Logements_Title'>{logement.title}</h2>
            <p className='Logements_Location'>{logement.location}</p>
            <ul className="tags-container">{tagsList}</ul>
        </div>
    )
}
export default Tag