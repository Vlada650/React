import React, { useState } from "react";
import UnitCards from "./allcards";
import './mainpage.scss';

function List(props) {

    const [clickVeg, setClickVeg] = useState(false)
    const [clickFruit, setClickFruit] = useState(false)

    let vegetablesArr = props.words.filter(function (props) {
        if (props.unit == "Овощи") {
            return true;
        }
    });

    let fruitsArr = props.words.filter(function (props) {
        if (props.unit == "Фрукты") {
            return true;
        }
    });

    return (
        <div className="mainContainer" >
            <p className="mainContainer-header">Список тем:</p>
            <ol>
                <li className="mainContainer__list" onClick={() => { setClickVeg(true) }} >Овощи</li>
                {clickVeg
                    && (<div className="card__container">
                        <label onClick={() => { setClickVeg(false) }} tabIndex="0" onBlur={() => { setClickVeg(false) }} className="mainContainer-closer">&#215;</label>{
                            vegetablesArr.map((word) =>
                                <UnitCards key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />)}
                    </div>)
                }
                <li className="mainContainer__list" onClick={() => { setClickFruit(true) }} >Фрукты</li> {clickFruit
                    && (<div className="card__container">
                        <label onClick={() => { setClickFruit(false) }} tabIndex="0" onBlur={() => { setClickFruit(false) }} className="mainContainer-closer">&#215;</label>{
                            fruitsArr.map((word) =>
                                <UnitCards key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />)}
                    </div>)
                }
                <li className="mainContainer__list">Одежда</li>
                <li className="mainContainer__list">Животные</li>
                <li className="mainContainer__list">Спорт</li>
                <li className="mainContainer__list">Школа</li>
                <li className="mainContainer__list">Семья</li>
                <li className="mainContainer__list">Транспорт</li>
                {/*<div>Автобус, автомобиль, самолет, корабль, светофор, дорога, вертолет</div>
                <div>кабачок, капуста, лук, чесно</div>
                <div>киви, , апельсин, гранат, мандарин, , манго</div>
                <div>джинсы, юбка, , костюм, , шляпа, туфли</div>
                <div> слон, заяц, жираф, зебра, обезьяна</div> 
                <div>Велосипед, спортзал, упражнение, тренер, мяч, скакалка, спортсмен, бассейн, волейбол, баскетбол</div>
                 <div>Ученик, учитель, тетрадь, книга, парта, доска, ручка, карандаш, предмет, тема</div>
                <div>Мама, папа, дочь, сын, брат, сестра, бабушка, дедушка, родители, бабушка с дедушкой</div>*/}
            </ol>
        </div>
    );
}

export default List;