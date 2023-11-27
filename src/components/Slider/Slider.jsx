import React, { useState } from "react";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";

import "./Slider.scss";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

function Slider() {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
        console.log("Clic sur la flèche suivante");
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
        console.log("Clic sur la flèche précédente");
    };

    // Utilisez une instruction if pour décider d'afficher ou non les flèches et le compteur
    let navigationAndCounter = null;
    if (logement.pictures.length > 1) {
        navigationAndCounter = (
            <>
                <img
                    className="Slider__Prev__Arrow"
                    src={ArrowRight}
                    alt="Image précédente"
                    onClick={handlePreviousImage}
                />
                <img
                    className="Slider__Next__Arrow"
                    src={ArrowLeft}
                    alt="Image suivante"
                    onClick={handleNextImage}
                />
                <p className="Slider__Compteur"> {currentImageIndex + 1}/{logement.pictures.length}</p>
            </>
        );
    }

    return (
        <div className="Slider">
            {/* ... Autres contenus du composant Logements */}
            <div className="Slider__Can">
                <img
                    className="Slider__Img"
                    src={logement.pictures[currentImageIndex]}
                    alt="Logement"
                />
                {navigationAndCounter}
            </div>
        </div>
    );
};

export default Slider;
