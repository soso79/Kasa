import React from 'react';
import './Card.css';
import Logements from '../../components/Logements/Logements'

const Card = (props) => {
    return (
        <div className='appartement-card'>
            <Logements />
            <Logements />
            <Logements />
            <Logements />

        </div>
    );
};

export default Card;