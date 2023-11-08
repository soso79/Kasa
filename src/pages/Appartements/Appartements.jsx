import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import './Appartements.scss'
import Header from "../../components/Header/Header";
import Collapse from "../../components/Collapse/Collapse";
import Error from "../Error/Error";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";
import Footer from "../../components/Footer.js";

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



    const data = [
        {
            title: 'Description',
            text: logement.description
        },
        {
            title: 'Equipements',
            text: logement.equipments.map(equipment => (
                <p className='TextCollapse' key={equipment}>{equipment}</p>
            ))
        }
    ];

    // Pour afficher les tags avec des classes CSS
    const tagsList = logement.tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
    ));



    return (
        <div className="Logements">
            <Header />
            <div className="Logements-img">
                <img className="appart" src={logement.pictures[currentImageIndex]} alt={logement.title} />
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
            </div>
            <div className="Logements-can">
                <div className="Logements-tag">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tags-container">{tagsList}</div>
                </div>
                <div className="Logements-rate">
                    <div className="Logements-test">
                        <div className="essai">
                            <p className="Logements-titi"> {logement.host.name}</p></div>
                        <img className="Rate-picture" src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <p>{renderRatingStars(logement.rating)}</p>
                </div>
            </div>
            <div className="drop">
                <Collapse data={data} />
            </div>
            <Footer />
        </div>

    );

};

export default Logements;
