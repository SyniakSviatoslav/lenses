import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { Fade } from "react-awesome-reveal";

const Description = () => {
    return (
        <Fade cascade direction={'up'} fraction={0.2} triggerOnce={true}>
            <div className=" p-4">
                <div className="d-flex flex-column justify-content-center align-items-center description rounded m-4 ">
                    <div className="d-flex flex-column justify-content-center align-items-center blue-glass-filter rounded p-4">
                        <Fade cascade triggerOnce={true}>
                            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                                <div className="blue-text pink-back  p-2 rounded mb-2">
                                    <h3>Biofinity</h3>
                                </div>
                                <div className="text-white">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Suspendisse ultrices gravida dictum fusce ut placerat. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                                        Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade cascade triggerOnce={true}>
                            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                                <div className="blue-text pink-back p-2 rounded mb-2">
                                    <h3>Biofinity</h3>
                                </div>
                                <div className="text-white">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Suspendisse ultrices gravida dictum fusce ut placerat. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                                        Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade cascade triggerOnce={true}>
                            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                                <div className="blue-text pink-back p-2 rounded mb-2">
                                    <h3>Biofinity</h3>
                                </div>
                                <div className="text-white">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Suspendisse ultrices gravida dictum fusce ut placerat. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                                        Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Description;