import './mainpage.scss';
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Allwords from './allwords';

function Header(props) {

    const [clicked, setClicked] = useState(false)

    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="header__promo">Just learn it!</span>
            <button onClick={() => { setClicked(true) }} className="header__popup-shower">Добавить новое слово</button>
            {
                clicked
                    ? (<div className="popup__container">
                        <label tabIndex="0" onClick={() => { setClicked(false) }} className="popup__container-closer">&#215;</label>
                        <thead>
                            <tr>
                                <th className="popup__container-table" id="english">English</th>
                                <th className="popup__container-table" id="sound">Transcription</th>
                                <th className="popup__container-table" id="russian">Russian</th>
                                <th className="popup__container-table" id="unit">Unit</th>
                                <th className="popup__container-table" id="buttons">Buttons</th>
                            </tr>
                        </thead>
                        {
                            props.words.map((word) =>
                                <Allwords words={word} key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />)
                        }
                    </div>)
                    : null
            }
        </div >
    );
}

export default Header;