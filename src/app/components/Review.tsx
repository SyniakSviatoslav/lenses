import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Review = () => {
    return (
        <div className="d-flex  rounded justify-content-around p-4 m-4">
            <div className="description blue-glass-filter text-white d-flex flex-column justify-content-center align-items-center">
                <div>
                    <img className="review-image blue-glass-filter p-2" src={require('../../assets/images/review-unspash.jpg')}></img>
                </div>
                <div className="S d-flex flex-column align-items-center p-2">
                    <h3 className="blue-text">Хороший Відгук</h3>
                    <p>Review Review Review Review Review!</p>
                </div>
            </div>
            <div className=" description blue-glass-filter text-white d-flex flex-column justify-content-center align-items-center">
                <div>
                    <img className="review-image blue-glass-filter p-2" src={require('../../assets/images/review-unspash.jpg')}></img>
                </div>
                <div className="S d-flex flex-column align-items-center p-2">
                    <h3 className="blue-text">Хороший Відгук</h3>
                    <p>Review Review Review Review Review!</p>
                </div>
            </div>
            <div className="description blue-glass-filter text-white d-flex flex-column justify-content-center align-items-center">
                <div>
                    <img className="review-image blue-glass-filter p-2" src={require('../../assets/images/review-unspash.jpg')}></img>
                </div>
                <div className="S d-flex flex-column align-items-center p-2">
                    <h3 className="blue-text">Хороший Відгук</h3>
                    <p>Review Review Review Review Review!</p>
                </div>
            </div>
        </div>
    );
};

export default Review;