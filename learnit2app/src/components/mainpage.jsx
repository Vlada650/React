import React from "react";
import './mainpage.scss';
import Allwords from "./allwords";

export default function MainPage({ words }) {
    return (
        <div className="popup__container">
            <Allwords words={words} />
        </div>
    );
};