import React from 'react';
import "./Rating.scss";
import Error from "../../pages/Error/Error.js";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import StarFull from "../../assets/star-active.png";
import StarEmpty from "../../assets/star-inactive.png";


const Rating = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);



    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={StarFull} alt="Full Star" className="star" />);
            } else {
                stars.push(<img key={i} src={StarEmpty} alt="Empty Star" className="star" />);
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