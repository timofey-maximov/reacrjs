import React, { useState } from "react";
import "./Menu.css";

export function Menu(props) {
    const [activeItem, setActiveItem] = useState();

    const processItemClick = (newActiveItem) => {
        setActiveItem(newActiveItem);
    }

    const getItemClassName = (itemIndex) => {
        if (itemIndex === activeItem) {
            return "active";
        } else {
            return "";
        }
    }

    return (
        <div id="header">
            <div id="nav-container">

                <div id="logo">
                    <a href="#"><img src="favicon.png" alt="logo" width="40px"></img></a>
                    <a href="#" title="На главную">MovieFinder</a>
                </div>


                <div id="nav-wrapper">

                    <ul id="nav">
                        {props.items.map((item, i) => (
                            <li id="nav-item" key={i} className={getItemClassName(i)} onClick={() => processItemClick(i)}>{item}</li>
                        ))}
                    </ul>

                    <div id="menu-togle" id="menu-icon">
                        <div id="menu-icon-line"></div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}
