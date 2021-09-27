import React, { useState, useRef, useEffect } from "react";
import './mainpage.scss';


const CardSlider = ({ prevCard, nextCard, number, position, data, dataLength }) => {
    const [pushed, setPushed] = useState(false);
    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    return (
        <div className="slider">
            <div className="slider-container">
                <button className="slider-container__btn" onClick={prevCard}>prev</button>
                <div className="card">
                    <div className="card__word">{data[position].english}</div>
                    <div className="card__scription">[{data[position].russian}]</div>{
                        pushed ? (<div className="card__translate">{data[position].transcription}</div>)
                            : (<div className="card__button"><button className="card__button-add" ref={ref} onClick={() => { setPushed(true) }}>Показать перевод</button></div>)}
                </div>
                <button className="slider-container__btn" onClick={nextCard}>next</button>
            </div>
            <div className="slider-numbers">{number} / {dataLength}</div>

        </div>
    )
}

export default CardSlider;