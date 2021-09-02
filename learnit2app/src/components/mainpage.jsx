import React, { useState } from "react";
import UnitCards from "./allcards";
import './mainpage.scss';

function List(props) {

    const [clicked, setClicked] = useState(false)

    return (
        <div className="mainContainer" >
            <p className="mainContainer-header">Список тем:</p>
            <ol>
                <li className="mainContainer__list" onClick={() => { setClicked(true) }} >Овощи</li>
                {clicked
                    && (<div className="card__container">
                        <label onClick={() => { setClicked(false) }} tabIndex="0" onBlur={() => { setClicked(false) }} className="mainContainer-closer">&#215;</label>{
                            props.words.map((word) =>
                                <UnitCards key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />)}
                    </div>)
                }
                <li className="mainContainer__list">Фрукты</li>
                <li className="mainContainer__list">Одежда</li>
                <li className="mainContainer__list">Животные</li>
                <li className="mainContainer__list">Спорт</li>
                <li className="mainContainer__list">Школа</li>
                <li className="mainContainer__list">Семья</li>
                <li className="mainContainer__list">Транспорт</li>
                {/*<div>Автобус, автомобиль, самолет, корабль, светофор, дорога, вертолет</div>
                <div>, морковь, баклажан, кабачок, капуста, , огурец, лук, чеснок, кукуруза</div>
                <div>Яблоко, груша, ананас, киви, банан, апельсин, гранат, мандарин, персик, манго</div>
                <div>Футболка, шорты, брюки, джинсы, юбка, платье, костюм, куртка, шляпа, туфли</div>
                <div>Кот, собака, тигр, лев, слон, заяц, жираф, зебра, обезьяна, страус</div> 
                <div>Велосипед, спортзал, упражнение, тренер, мяч, скакалка, спортсмен, бассейн, волейбол, баскетбол</div>
                 <div>Ученик, учитель, тетрадь, книга, парта, доска, ручка, карандаш, предмет, тема</div>
                <div>Мама, папа, дочь, сын, брат, сестра, бабушка, дедушка, родители, бабушка с дедушкой</div>*/}
            </ol>
        </div>
    );
}

export default List;