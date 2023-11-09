import React from "react";
import './Appartements.scss'
import Header from "../../components/Header/Header";
import Rating from "../../components/Rating/Rating.jsx";
import Footer from "../../components/Footer.js";
import Slider from "../../components/Slider/Slider.jsx";
import Tag from "../../components/Tag/Tag.jsx";
import DropDown from "../../components/DropDown/DropDown.jsx";


const Appartements = (props) => {
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
