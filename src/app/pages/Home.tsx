import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import Slider from "../components/Slider";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import './home.css'

const Home = () => {


    return (
        <div className="wrapper w-100 py-4 d-flex justify-content-center">

            <div className="main-container p-4">
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
                <Slider/>
            </div>

        </div>
    );
};

export default Home;