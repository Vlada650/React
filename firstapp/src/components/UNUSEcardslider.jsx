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

/*.card__container {
   position: absolute;
   width: 80vw;
   height:70vh;
   display: flex;
   flex-wrap: wrap;
   border: 2px solid $detailColor;
   background-color: $mainColor;
   margin-top: -50px;
   padding: 2em;
   border-radius: 5px;
   overflow: auto;

   &::-webkit-scrollbar {
       width: 8px;
       border-radius: 10px;
       border: 1px solid $fontColor;
       background-color:$fontColor ;
       margin-top: 5px;
   }

   &::-webkit-scrollbar-thumb {
       background-color: $mainColor;
       border-radius: 10px;
       border: 1px solid $fontColor;
   }
}

.cardGallery{
   width: 50vw;
   height: 50vh;
   border: 1px solid red;
   position: absolute;
   right: 0;
   top: 130px;
}
*/