import React from "react";
import UnitCards from "./allcards";
import './mainpage.css';

const words = [
    {
        english: "Potato",
        russian: "Картошка",
        transcription: "hhhhhh",
        unit: "Овощи"
    }, {
        english: "Tomato",
        russian: "Помидор",
        transcription: "aaaaaaa",
        unit: "Овощи"
    }
];


function List() {
    return (
        <div className="mainContainer">
            <p className="mainContainer-header">Список тем:</p>
            <ol>
                <li className="mainContainer__list"><label for="openclose" id="label">Овощи</label></li>
                <div>, морковь, баклажан, кабачок, капуста, , огурец, лук, чеснок, кукуруза</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Фрукты</label></li>
                <div>Яблоко, груша, ананас, киви, банан, апельсин, гранат, мандарин, персик, манго</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Одежда</label></li>
                <div>Футболка, шорты, брюки, джинсы, юбка, платье, костюм, куртка, шляпа, туфли</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Животные</label></li>
                <div>Кот, собака, тигр, лев, слон, заяц, жираф, зебра, обезьяна, страус</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Спорт</label></li>
                <div>Велосипед, спортзал, упражнение, тренер, мяч, скакалка, спортсмен, бассейн, волейбол, баскетбол</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Школа</label></li>
                <div>Ученик, учитель, тетрадь, книга, парта, доска, ручка, карандаш, предмет, тема</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Семья</label></li>
                <div>Мама, папа, дочь, сын, брат, сестра, бабушка, дедушка, родители, бабушка с дедушкой</div>
                <li className="mainContainer__list"><label for="openclose" id="label">Транспорт</label></li>
                <div>Автобус, автомобиль, самолет, корабль, светофор, дорога, вертолет</div>
            </ol>

            {
                words.map((word) =>
                    <UnitCards english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />
                )
            }
        </div>
    );
}

export default List;