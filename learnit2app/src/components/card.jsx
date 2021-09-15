import React, { useState } from "react";
import './mainpage.scss';

function UnitCards({ russian, english, transcription }) {

    const [pushed, setPushed] = useState(false)

    return (
        <div className="card">
            <div className="card__word">{english}</div>
            <div className="card__scription">[{transcription}]</div>{
                pushed ? (<div className="card__translate">{russian}</div>)
                    : (<div className="card__button"><button className="card__button-add" onClick={() => { setPushed(true) }}>Показать перевод</button></div>)}
        </div>

    );
}
export default UnitCards;