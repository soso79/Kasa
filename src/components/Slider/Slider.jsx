import React, { useState } from "react";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";
import Error from "../../pages/Error/Error.js";
import "./Slider.scss";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";

const Slider = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    if (!logement) {
        return <Error />;
    }

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
        <div className="Logements">
            {/* ... Autres contenus du composant Logements */}
            <div className="Logements-img">
                <img className="appart" src={logement.pictures[currentImageIndex]} alt="Logement" />
                <img
                    className="prev-arrow"
                    src={ArrowRight}
                    alt="Image précédente"
                    onClick={handlePreviousImage}
                />
                <img
                    className="next-arrow"
                    src={ArrowLeft}
                    alt="Image suivante"
                    onClick={handleNextImage}
                />
                <p className="Compteur"> {currentImageIndex + 1}/{logement.pictures.length}</p>
            </div>
        </div>
    );
};

export default Slider;
