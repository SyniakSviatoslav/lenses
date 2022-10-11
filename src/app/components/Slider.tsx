import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import './main.css';

const Slider = () => {
    return (
            <div className="rounded description  m-4">
                <div className="pink-glass-filter d-flex justify-content-center h-100 w-100 p-4">
                    <div className="slider-container ">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-50 carousel-img"
                                    src={require('../../assets/images/slider1.jpg')}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="blue-text  mb-4">
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

                                <Carousel.Caption className=" blue-text  mb-4">
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

                                <Carousel.Caption className=" blue-text mb-4">
                                    <h3>Biofinity</h3>
                                    {/* <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    </div>
                </div>
    );
};

export default Slider;