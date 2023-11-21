import React from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import './Appartements.scss'
import Header from "../../components/Header/Header";
import Rating from "../../components/Rating/Rating.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import DropDown from "../../components/DropDown/DropDown.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Error from "../../pages/Error/Error.jsx";

const Appartements = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);

    if (!logement) {
        return <Error />; // Affichez le composant d'erreur si aucun logement n'est trouvé
    }
    return (
        <div className="Logements">
            <Header />
            <Slider />
            <div className="Logements-can">
                <Tag />
                <Rating />
            </div>
            <div className="drop">
                <DropDown />
            </div>
            <Footer />
        </div>

    );

};

export default Appartements;
