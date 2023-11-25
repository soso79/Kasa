import React from 'react';
import "./Rating.scss";

import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import StarFull from "../../assets/star-active.png";
import StarEmpty from "../../assets/star-inactive.png";


const Rating = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);



    // Cette fonction prend un paramètre 'rating' qui représente la note (un nombre de 1 à 5).
    const renderRatingStars = (rating) => {
        // Crée un tableau 'stars' pour stocker les éléments d'étoiles.
        const stars = [];

        // Parcourt une boucle de 1 à 5 (pour les 5 étoiles possibles).
        for (let i = 1; i <= 5; i++) {
            // Vérifie si l'indice actuel 'i' est inférieur ou égal au 'rating' passé en paramètre.
            if (i <= rating) {
                // Si oui, ajoute une étoile pleine à 'stars'.
                stars.push(<img key={i} src={StarFull} alt="Full Star" className="Star" />);
            } else {
                // Si non, ajoute une étoile vide à 'stars'.
                stars.push(<img key={i} src={StarEmpty} alt="Empty Star" className="Star" />);
            }
        }

        // Retourne le tableau 'stars' qui contient les étoiles créées en fonction du 'rating'.
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