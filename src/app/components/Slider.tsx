import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import './main.css';

const Slider = () => {
    return (
        <div className="d-flex justify-content-center blue-glass-filter description p-4 m-4">
            <div className="slider-container">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../../assets/images/slider1-unsplash.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption className="pink-glass-filter blue-text">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../../assets/images/slider2-unsplash.jpg')}
                    alt="Second slide"
                />

                <Carousel.Caption className="pink-glass-filter blue-text">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../../assets/images/slider3-unsplash.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption className="pink-glass-filter blue-text">
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
    );
};

export default Slider;