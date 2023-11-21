

import React from 'react';
import "./Tag.scss";

import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

const Tag = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);




    // Pour afficher les tags avec des classes CSS
    const tagsList = logement.tags.map((tag, index) => (
        <li key={index} className="Tags">{tag}</li>
    ));

    return (


        <div className="Tag">
            <h2 className='Tag__Title'>{logement.title}</h2>
            <p className='Tag__Location'>{logement.location}</p>
            <ul className="Tag__List">{tagsList}</ul>
        </div>
    )
}
export default Tag