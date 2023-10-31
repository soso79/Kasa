import React from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import './Appartements.scss'
import Header from "../../components/Header/Header"

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

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

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

                    <p> {logement.host.name}
                        <img className="Rate-picture" src={logement.host.picture} alt={logement.host.name} /></p>
                    <p>{renderRatingStars(logement.rating)}</p>
                </div>

            </div>
            <p>Équipements :</p>
            <ul>
                {logement.equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                ))}
            </ul>
            <p> Description:{logement.description}</p>


        </div>
    );
};

export default Logements;
