import React, { useState } from "react";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";

import "./Slider.scss";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

const Slider = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);



    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="Slider">
            {/* ... Autres contenus du composant Logements */}
            <div className="Slider__Can">
                <img className="Slider__Img" src={logement.pictures[currentImageIndex]} alt="Logement" />
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
            </div>
        </div>
    );
};

export default Slider;
