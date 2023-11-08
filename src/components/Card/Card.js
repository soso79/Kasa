import React from 'react';
import './Card.css';
import Logements from '../../components/Logements/Logements';
import LogementsData from '../../assets/logements.json';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='appartement-can'>
            <div className='appartement-card'>
                {LogementsData.map((logement) => (
                    <NavLink to={`/logement/${logement.id}`} key={logement.id}>
                        <div className='toto'>
                            <Logements
                                key={logement.id}
                                id={logement.id}
                                title={logement.title}
                                cover={logement.cover}


                            />
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>
    );
};

export default Card;