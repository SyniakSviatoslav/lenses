import React, { useEffect, useState } from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import { Dropdown, DropdownDivider, DropdownItem } from "semantic-ui-react";
import './home.css'

const Home = () => {


    const friendOptions = [
        {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess',
            image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
        },
    ]


    return (
        <div className="wrapper w-100 py-4 d-flex justify-content-center">

            <div className="main-container p-4">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h1 className="text-white mb-4">Як обрати контактні лінзи?</h1>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item">Something else here</span>
                                <span className="dropdown-item">Something else here</span>
                                <span className="dropdown-item">Something else here</span>
                            </div>
                        </div>
                        <Dropdown
                            placeholder='Select Friend'
                            fluid
                            simple
                            options={friendOptions}
                        />
                        <button>Режим носіння</button>
                        <button>Виробник лінз</button>
                        <button>Вид лінз</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;