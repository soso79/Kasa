import React from 'react';
import './Logements.scss';



const Logements = ({ id, title, cover }) => {
    return (



        <div className='logements'>

            <img src={cover} alt={title} />
            <h2 className='logements-title'>{title}</h2>





        </div>

    );
};

export default Logements;

/*<h2 className='logements-title'>{title}</h2>*/


