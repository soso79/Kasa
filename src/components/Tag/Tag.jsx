

import React from 'react';
import "./Tag.scss";
import Error from "../../pages/Error/Error.js";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

const Tag = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    if (!logement) {
        return <Error />;
    }


    // Pour afficher les tags avec des classes CSS
    const tagsList = logement.tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
    ));

    return (


        <div className="Logements-tag">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <div className="tags-container">{tagsList}</div>
        </div>
    )
}
export default Tag