import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
// import lenseImage from '../../assets/images/lenses.jpg';

const LensesList = () => {
    const lenses = [1,2,3,4,5,6,7,8,9,10,11,12]

    return (
        <div style={{background: '#e1b5e8'}} className="d-flex justify-content-center flex-wrap my-4">
            {lenses.map((x) => 
            <div className="blue-back text-white d-flex align-items-center lense-container m-4">
                <img className="lense-img-container" src={require('../../assets/images/lenses.jpg')}></img>
                <div className="d-flex flex-column justify-content-around p-2">
                    <strong className="mb-2">Biofinity 3L</strong>
                    <span>400 грн</span>
                </div>
            </div>)}
        </div>
    );
};

export default LensesList;