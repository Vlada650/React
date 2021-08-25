import React from "react";
import './mainpage.css';

function UnitCards(props) {
    return (
        <div>
            <section class="cardContainer" />
            <input type="checkbox" class="cardContainer__checkbox" id="openclose" />
            <div class="cardContainer__modalWrapper">
                <div class="cardContainer__modal">
                    <label for="openclose" class="cardContainer__modal-label">&times;</label>
                    <p class="cardContainer__modal-cityList">
                    </p>
                    <div className="card">
                        <div className="card__word">{props.english}</div>
                        <div className="card__scription">[{props.transcription}]</div>
                        <div className="card__translate">{props.russian}</div>
                        <p className="card__unit">Unit: {props.unit}</p>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default UnitCards;
