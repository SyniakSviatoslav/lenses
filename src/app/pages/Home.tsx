import React from "react";
import { Fade } from "react-awesome-reveal";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
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
                            <h1 className="text-white mb-4">Як обрати контактні лінзи?</h1>
                            <div className="d-flex w-100 justify-content-around align-items-center mt-4">
                                <Dropdown className="main-btn">
                                    <DropdownToggle variant="main-btn" className="mr-2" id="dropdown-basic">
                                        Режим носіння
                                    </DropdownToggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Режим 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Режим 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Режим 1</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-btn">
                                    <DropdownToggle variant="main-btn" id="dropdown-basic">
                                        Виробник лінз
                                    </DropdownToggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Режим 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Режим 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Режим 1</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-btn">
                                    <DropdownToggle variant="main-btn" id="dropdown-basic">
                                        Вид лінз
                                    </DropdownToggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Режим 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Режим 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Режим 1</Dropdown.Item>
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