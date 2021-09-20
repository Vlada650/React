import React from "react";
import './mainpage.scss';
import UnitCards from "./card";

const CardSlider = ({ prevCard, nextCard, number, position, data, dataLength }) => {
    return (
        <div className="slider">
            <div className="slider-container">
                <button className="slider-container__btn" onClick={prevCard}>prev</button>
                <UnitCards
                    english={data[position].english}
                    russian={data[position].russian}
                    transcription={data[position].transcription}
                />
                <button className="slider-container__btn" onClick={nextCard}>next</button>
            </div>
            <div className="slider-numbers">{number} / {dataLength}</div>

        </div>
    )
}

export default CardSlider;