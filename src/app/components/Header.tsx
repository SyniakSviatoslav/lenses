import React, { useEffect, useState } from "react";
import { HeaderContent } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return (
        <header>
           <HeaderContent>
            <div className="d-flex justify-content-around align-items-center description"> 
                <h2>Dubin Lenses</h2>
                <span>Контактний телефон: {`(066-488-59-51)`}</span>
            </div>
           </HeaderContent>
        </header>
    );
};

export default Header;