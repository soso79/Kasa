import React from 'react';
import "./Rating.scss";
import Error from "../../pages/Error/Error.js";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";



const Rating = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    if (!logement) {
        return <Error />;
    }

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

    return (


        <div className="Logements-rate">
            <div className="Logements-test">
                <div className="essai">
                    <p className="Logements-titi"> {logement.host.name}</p></div>
                <img className="Rate-picture" src={logement.host.picture} alt={logement.host.name} />
            </div>
            <p>{renderRatingStars(logement.rating)}</p>
        </div>

    );
}
export default Rating