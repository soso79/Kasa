import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import './Appartements.scss'
import Header from "../../components/Header/Header";
import Collapse from "../../components/Collapse/Collapse";

const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="star">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>);
        }
    }
    return stars;
};

const Logements = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    const data = [
        {
            title: 'Description',
            text: logement.description
        },
        {
            title: 'Equipements',
            // Créer une liste avec les équipements
            text: logement.equipments.map(equipment => (
                <p className='TextCollapse' key={equipment}>{equipment}</p>
            ))
        }
    ]

    return (
        <div className="Logements">
            <Header />
            <div className="Logements-img">
                <img className="appart" src={logement.cover} alt={logement.title} />
            </div>
            <div className="Logements-can">
                <div className="Logements-tag">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <p>{logement.tags}</p>
                </div>
                <div className="Logements-rate">
                    <div className="Logements-test">
                        <div className="Logements-toto">
                            <p className="Logements-titi"> {logement.host.name}</p>
                        </div>
                        <img className="Rate-picture" src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <p>{renderRatingStars(logement.rating)}</p>
                </div>
            </div>
            <div className="drop">
                <Collapse data={data} />
            </div>
        </div >
    );
};

export default Logements;
