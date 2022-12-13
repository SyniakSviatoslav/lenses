import React from "react";
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
        <div className="wrapper  w-100 pb-4 d-flex flex-column justify-content-center">
            <div className="d-flex w-100 home">
                {/* className="position-absolute" style={{left: '100px', bottom: '500px'}} */}
                <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-left">
                        <h1 style={{fontSize: '70px'}} className='mb-4'>Оптичні лінзи</h1>
                        <p>Лінзи всіх типів на усі випадки життя.</p>
                        <p>Допоможемо вам бачити краще.</p>
                    </div>
                </div>
                <div className="w-50">
                    <img className="w-100" src={require('../../assets/images/eye.png')}></img>
                </div>
            </div>
            {/* <div className='d-flex justify-content-center mb-4'>
                    <div className="description main-container p-4">
                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                            <h1 className="text-white mb-4">Як обрати лінзи?</h1>
                            <div className="d-flex w-100 justify-content-around align-items-center mt-4 flex-wrap"  style={{gap: '10px'}}>
                                <Dropdown className="main-btn pink-btn">
                                    <DropdownToggle variant="main-btn" className="mr-2" id="dropdown-basic">
                                        Режим носіння
                                    </DropdownToggle>
                                    <Dropdown.Menu className="pink-btn">
                                        <Dropdown.Item href="#/action-1">Одноденні</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Місячної заміни</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">День та ніч</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-btn pink-btn">
                                    <DropdownToggle variant="main-btn" id="dropdown-basic">
                                        Виробник лінз
                                    </DropdownToggle>
                                    <Dropdown.Menu className="pink-btn">
                                        <Dropdown.Item href="#/action-1">Alcon</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Coopervision</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Bausch+Lomb</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-btn pink-btn">
                                    <DropdownToggle variant="main-btn" id="dropdown-basic">
                                        Вид лінз
                                    </DropdownToggle>
                                    <Dropdown.Menu className="pink-btn">
                                        <Dropdown.Item href="#/action-1">Звичайні</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Для астигматизму</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Мультифокальні</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div> */}
            <Slider />
            <LensesList />
            <Description />
            <Deliver />
            <Review />
        </div>
    );
};

export default Home;