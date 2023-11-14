import React from "react";
import { useParams } from "react-router-dom";
import LogementsData from "../../assets/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import "./DropDown.scss"





const DropDown = () => {
    const { id } = useParams();
    const logement = LogementsData.find((logement) => logement.id === id);







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

    return (

        <Collapse data={data} />
    );

};
export default DropDown