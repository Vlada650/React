import React from "react";
import UnitCards from "./allcards";
import './mainpage.scss';


function List() {
    return (
        <div className="mainContainer">
            {
                words.map((word) =>
                    <UnitCards key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />
                )}
            <p className="mainContainer-header">Список тем:</p>
            <ol>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label">Овощи</label></li>
                <div>, морковь, баклажан, кабачок, капуста, , огурец, лук, чеснок, кукуруза</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label" id="label">Фрукты</label></li>
                <div>Яблоко, груша, ананас, киви, банан, апельсин, гранат, мандарин, персик, манго</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label">Одежда</label></li>
                <div>Футболка, шорты, брюки, джинсы, юбка, платье, костюм, куртка, шляпа, туфли</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label">Животные</label></li>
                <div>Кот, собака, тигр, лев, слон, заяц, жираф, зебра, обезьяна, страус</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label">Спорт</label></li>
                <div>Велосипед, спортзал, упражнение, тренер, мяч, скакалка, спортсмен, бассейн, волейбол, баскетбол</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label">Школа</label></li>
                <div>Ученик, учитель, тетрадь, книга, парта, доска, ручка, карандаш, предмет, тема</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label">Семья</label></li>
                <div>Мама, папа, дочь, сын, брат, сестра, бабушка, дедушка, родители, бабушка с дедушкой</div>
                <li className="mainContainer__list"><label for="openclose" className="mainContainer__list-label"> Транспорт</label></li>
                <div>Автобус, автомобиль, самолет, корабль, светофор, дорога, вертолет</div>
            </ol>
            {/*< div className="header__popup-content" >
                <div className="number"></div>
                <div className="english">{props.english}</div>
                <div className="sound">{props.transcription}</div>
                <div className="russian">{props.russian}</div>
            </div >*/}

        </div >
    );
}

export default List;