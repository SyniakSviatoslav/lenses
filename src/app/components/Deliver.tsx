import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { ArrowRight, CreditCard, MessageCircle, Monitor, Package } from "react-feather";

const Deliver = () => {
    return (
            <div className="d-flex flex-wrap justify-content-between p-4 m-4 text-dark text-center">
                <div className="d-flex flex-column justify-content-center" style={{ width: '200px'}}>
                    <img src={require('../../assets/images/Group 22.png')}></img>
                    <p className="my-3">Обрати товар на сайті та заповнити форму </p>
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ width: '200px'}}>
                    <img src={require('../../assets/images/Group 23.png')}></img>
                    <p className="my-3">Менеджер зв'язується з вами для підтвердження замовлення</p>
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ width: '200px'}}>
                    <img src={require('../../assets/images/Group 24.png')}></img>
                    <p className="my-3">Товар відправляється поштою до вказного відділення</p>
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ width: '200px'}}>
                    <img src={require('../../assets/images/Group 25.png')}></img>
                    <p className="my-3">Ви оплачуєте товар при отриманні</p>
                </div>
            </div>
    );
};

export default Deliver;