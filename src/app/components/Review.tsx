import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Fade } from "react-awesome-reveal";

const Review = () => {
    return (
        <div className="d-flex  rounded justify-content-around p-4 m-4">
            <Fade duration={1500} fraction={0.5} direction={'up'} triggerOnce={true}>
                <div className="description blue-glass-filter text-white d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img className="review-image blue-glass-filter p-2" src={require('../../assets/images/review-unspash.jpg')}></img>
                    </div>
                    <div className="S d-flex flex-column align-items-center p-2">
                        <h3 className="blue-text">Хороший Відгук</h3>
                        <p>Review Review Review Review Review!</p>
                    </div>
                </div>
            </Fade>
            <Fade duration={1500} fraction={0.5} delay={500} direction={'up'} triggerOnce={true}>
                <div className=" description blue-glass-filter text-white d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img className="review-image blue-glass-filter p-2" src={require('../../assets/images/review-unspash.jpg')}></img>
                    </div>
                    <div className="S d-flex flex-column align-items-center p-2">
                        <h3 className="blue-text">Хороший Відгук</h3>
                        <p>Review Review Review Review Review!</p>
                    </div>
                </div>
            </Fade>
            <Fade duration={1500} fraction={0.5} delay={1000} direction={'up'} triggerOnce={true}>
                <div className="description blue-glass-filter text-white d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img className="review-image blue-glass-filter p-2" src={require('../../assets/images/review-unspash.jpg')}></img>
                    </div>
                    <div className="S d-flex flex-column align-items-center p-2">
                        <h3 className="blue-text">Хороший Відгук</h3>
                        <p>Review Review Review Review Review!</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Review;