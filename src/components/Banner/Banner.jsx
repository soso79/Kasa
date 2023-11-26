import React from "react";
import "./Banner.scss";

const Banner = ({ titre }) => {
    return (
        <div className="Banner">
            <h1 className="Banner__Title" src={titre}>Chez vous, <span>partout et ailleurs</span></h1>
        </div>
    );
}

export default Banner;