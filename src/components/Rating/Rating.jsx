import React from 'react';
import "./Rating.scss";

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
                stars.push(<img key={i} src={StarFull} alt="Full Star" className="Star" />);
            } else {
                stars.push(<img key={i} src={StarEmpty} alt="Empty Star" className="Star" />);
            }
        }
        return stars;
    };

    return (


        <div className="Rate">
            <div className="Rate__Section">
                <div className="Rate__Can">
                    <p className="Rate__Name"> {logement.host.name}</p></div>
                <img className="Rate__Picture" src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className='Rate__Stars__Can'>
                <p className='Rate__Stars'>{renderRatingStars(logement.rating)}</p>
            </div>
        </div>

    );
}
export default Rating