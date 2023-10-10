import React from "react";
import "./Banner.css";

function Banner({ image, texte }) {
    return (
        <div className="BannerCan">
            <img className="Banner-img" src={image} alt="Bannière" />
            <div className="Banner-Txt"></div>
            <p className="Banner-Slogan">{texte}</p>
        </div>
    );
}

export default Banner;