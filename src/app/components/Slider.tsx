import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import './main.css';
import { Fade } from "react-awesome-reveal";

const Slider = () => {
    return (
        <Fade cascade direction={'up'} delay={500} fraction={0.5} duration={1500} triggerOnce={true}>
            <div className="d-flex justify-content-center blue-glass-filter description p-4 m-4">
                <div className="slider-container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 carousel-img"
                                src={require('../../assets/images/slider1.jpg')}
                                alt="First slide"
                            />
                            <Carousel.Caption className="pink-glass-filter blue-text  mb-2">
                                <h3>Air Optics</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 carousel-img"
                                src={require('../../assets/images/slider2.jpg')}
                                alt="Second slide"
                            />

                            <Carousel.Caption className="pink-glass-filter blue-text  mb-2">
                                <h3>Pure vision</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 carousel-img"
                                src={require('../../assets/images/slider3.jpg')}
                                alt="Third slide"
                            />

                            <Carousel.Caption className="pink-glass-filter blue-text mb-2">
                                <h3>Biofinity</h3>
                                {/* <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </Fade>
    );
};

export default Slider;