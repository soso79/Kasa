import React from "react";
import './Erreur.scss';
import Photo from '../../assets/404.png';
import { NavLink } from "react-router-dom";


function Erreur() {

    return (

        <div className="Erreur">


            <div className='Erreur__Logo'>
                <img src={Photo} alt='page erreur' className='Erreur__Img' />
                <p className='Erreur__Text'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
            </div>

            <NavLink to="/" className="Erreur__Link">Retourner sur la page d’accueil</NavLink>







        </div>
    );


};

export default Erreur