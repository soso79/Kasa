import React from 'react';
import './Logements.scss';



function Logements({ title, cover }) {
    return (



        <div className='House'>

            <img className='House__Img' src={cover} alt={title} />
            <h2 className='House__Title'>{title}</h2>





        </div>

    );
};

export default Logements;




