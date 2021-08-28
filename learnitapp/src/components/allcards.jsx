import React from "react";
import './mainpage.scss';

function UnitCards(props) {
    return (
        <div>
            <input type="checkbox" className="cardContainer__checkbox" id="openclose" />{props.english}
            <div className="cardContainer__modalWrapper">
                <div className="cardContainer__modal">
                    <label for="openclose" className="cardContainer__modal-label">&times;</label>
                    <div className="card">
                        <div className="card__word">{props.english}</div>
                        <div className="card__scription">[{props.transcription}]</div>
                        <div className="card__translate">{props.russian}</div>
                        <p className="card__unit">Unit: {props.unit}</p>
                        <div className="card__button"><button className="card__button-add">Button</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UnitCards;
