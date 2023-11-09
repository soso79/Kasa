import React from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import './Appartements.scss'
import Header from "../../components/Header/Header";
import Collapse from "../../components/Collapse/Collapse";
import Error from "../Error/Error";

import Footer from "../../components/Footer.js";
import Slider from "../../components/Slider/Slider.jsx";

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
            <Slider />
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
