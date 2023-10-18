import React from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

const Logements = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className="Logements">
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
            {/* Affichez ici d'autres détails du logement */}
        </div>
    );
};

export default Logements;
