import React from "react";
import { Fade } from "react-awesome-reveal";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { TypeAnimation } from "react-type-animation";
import Deliver from "../components/Deliver";
import Description from "../components/Description";
import LensesList from "../components/LensesList";
import Review from "../components/Review";
import Slider from "../components/Slider";
import './home.css'

const Home = () => {

    return (
        <div className="wrapper  w-100 py-4 d-flex flex-column justify-content-center">

            <Fade delay={500} triggerOnce={true}>
                <div className='d-flex justify-content-center mb-4'>
                    <div className="description main-container p-4">
                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                            <h1 className="text-white mb-4"><TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                    'Як обрати якісні лінзи?',
                                    2000,
                                    'Як обрати доступні лінзи?',
                                    2000,
                                    'Як обрати хороші лінзи?',
                                    2000,
                                    'Як обрати просто лінзи?',
                                    2000,
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '2em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                            </h1>
                            <div className="d-flex w-100 justify-content-around align-items-center mt-4 flex-wrap"  style={{gap: '10px'}}>
                                <Dropdown className="main-btn">
                                    <DropdownToggle variant="main-btn" className="mr-2" id="dropdown-basic">
                                        Режим носіння
                                    </DropdownToggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Одноденні</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Місячної заміни</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">День та ніч</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-btn">
                                    <DropdownToggle variant="main-btn" id="dropdown-basic">
                                        Виробник лінз
                                    </DropdownToggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Alcon</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Coopervision</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Bausch+Lomb</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-btn">
                                    <DropdownToggle variant="main-btn" id="dropdown-basic">
                                        Вид лінз
                                    </DropdownToggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Звичайні</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Для астигматизму</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Мультифокальні</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Slider />
            <LensesList />
            <Description />
            <Deliver />
            <Review />
        </div>
    );
};

export default Home;