import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Description = () => {
    return (
        <div className="description">
            <div className="d-flex flex-column justify-content-center align-items-center p-4">
                <div className="d-flex flex-column justify-content-center align-items-center my-2">
                    <div className="blue-text pink-glass-filter  p-2 rounded mb-2">
                        <h3>Biofinity</h3>
                    </div>
                    <div className="text-white">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Suspendisse ultrices gravida dictum fusce ut placerat. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                            Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi.</p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center my-2">
                    <div className="blue-text pink-glass-filter p-2 rounded mb-2">
                        <h3>Biofinity</h3>
                    </div>
                    <div className="text-white">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Suspendisse ultrices gravida dictum fusce ut placerat. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                            Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi.</p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center my-2">
                    <div className="blue-text pink-glass-filter p-2 rounded mb-2">
                        <h3>Biofinity</h3>
                    </div>
                    <div className="text-white">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Suspendisse ultrices gravida dictum fusce ut placerat. Est placerat in egestas erat imperdiet sed euismod nisi porta.
                            Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;