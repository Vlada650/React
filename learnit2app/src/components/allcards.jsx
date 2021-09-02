import React from "react";
import './mainpage.scss';

function UnitCards(props) {
    return (
        <div className="card">
            <div className="card__word">{props.english}</div>
            <div className="card__scription">[{props.transcription}]</div>
            <div className="card__translate">{props.russian}</div>
            <p className="card__unit">Unit: {props.unit}</p>
            <div className="card__button"><button className="card__button-add">Button</button></div>
        </div>

    );
}
export default UnitCards;
