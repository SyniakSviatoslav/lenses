import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Review = () => {
    return (
        <div className="d-flex  rounded justify-content-around m-2 flex-wrap" style={{ gap: '20px' }}>
            <div className="lense-animation">
                <div className="description text-dark w-100 rounded" style={{background: 'rgb(245, 245, 245)'}}>
                    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center rounded">
                        <div>
                            <img className="review-image p-2" src={require('../../assets/images/review1.jpg')}></img>
                        </div>
                        <div className="S d-flex flex-column align-items-center p-2">
                            <h3 className="blue-text">Стас</h3>
                            <p >Купував собі air optics у лютому, -1,25 для водіння. Це мої перші лінзи, має сенс купувати лише 3 шт або 6 шт). Про магазин можу сказати, що доставили лінзи оперативно, ціни нижчі чим в люксоптиці.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lense-animation">
                <div className=" description text-dark w-100 rounded" style={{background: 'rgb(245, 245, 245)'}}>
                    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center rounded">
                        <div>
                            <img className="review-image p-2" src={require('../../assets/images/review2.jpg')}></img>
                        </div>
                        <div className="S d-flex flex-column align-items-center p-2">
                            <h3 className="blue-text">Микита</h3>
                            <p>Гарні лінзи, м'які та приємні для очей. Не сохнуть, носяться добре, весь день, а ось знімаються насилу (((, сильно прилипають до ока. Купую в цьому магазині вже не перший раз, все встигають в поставлені сроки і сроки по лінзам завжди найновіші</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lense-animation text-dark">
                <div className="description text-dark w-100 rounded" style={{background: 'rgb(245, 245, 245)'}}>
                    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center rounded">
                        <div>
                            <img className="review-image p-2" src={require('../../assets/images/review3.jpg')}></img>
                        </div>
                        <div className="S d-flex flex-column align-items-center p-2">
                            <h3 className="blue-text">Іринка</h3>
                            <p>Перейшла на одноденки не тільки з міркувань гігієни, як тут пишуть (хоча і це теж важливо), просто як на мене вони найзручніші. І теж, до речі, біотру вандей беру, задоволена ними в плані носіння цілком і повністю.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;