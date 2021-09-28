import React, { useState, useEffect, useRef } from "react";
import './mainpage.scss';

const Gallery = ({ data }) => {

    const [position, setPosition] = useState(0)
    const [pushed, setPushed] = useState(false);
    const [learned, setLearned] = useState(0)
    const ref = useRef();
    useEffect(() => ref.current.focus(), []);

    const prevCardHandler = () => {
        if (position > 0) {
            setPosition(position - 1)
        }
    };

    const nextCardHandler = () => {
        if (position >= data.length - 1) {
            setPosition(0)
        } else {
            setPosition(position + 1)
            setPushed(false)
        }
    };

    const onHandleChange = () => {
        if (setPushed(true)) {
            setLearned(learned + 1)
        }
    }
    return (
        < div className="slider" >
            <div className="slider-container">
                <button className="slider-container__btn" onClick={prevCardHandler}>prev</button>
                <div className="card">
                    <div className="card__word">{data[position].english}</div>
                    <div className="card__scription">[{data[position].transcription}]</div>{
                        pushed ? (<div className="card__translate">{data[position].russian}</div>)
                            : (<div className="card__button"><button className="card__button-add" ref={ref} onChange={onHandleChange} onClick={() => { setPushed(true) }}>Показать перевод</button></div>)}
                </div>
                <button className="slider-container__btn" onClick={nextCardHandler}>next</button>
            </div>
            <div className="slider-numbers">{position + 1} / {data.length}</div>
            <div className="slider-numbers">Изучено слов: {learned}</div>
        </div >
    )
}

export default Gallery;