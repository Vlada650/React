import React, { useState } from "react";
import './mainpage.scss';

function UnitCards(props) {

    const [pushed, setPushed] = useState(false)

    return (
        <div className="card">
            <div className="card__word">{props.english}</div>
            <div className="card__scription">[{props.transcription}]</div>{
                pushed ? (<div className="card__translate">{props.russian}</div>)
                    : (<div className="card__button"><button className="card__button-add" onClick={() => { setPushed(true) }}>Показать перевод</button></div>)}
        </div>

    );
}
export default UnitCards;
