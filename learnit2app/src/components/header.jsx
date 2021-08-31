import './mainpage.scss';
import React from "react";
import logo from "../assets/images/logo.png"


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="header__promo">Just learn it!<label for="closeopen"></label></span>
            <label for="popupCheckbox" className="header__popup-shower">Добавить новое слово</label>
            <input type="checkbox" className="header__popup-checkbox" id="popupCheckbox" />
            <div className="header__popup">
                <div className="header__popup-content">
                    <label for="popupCheckbox" className="header__popup-closer">&#215;</label>
                    <div className="number"></div>
                    <div className="english"></div>
                    <div className="sound"></div>
                    <div className="russian"></div>
                    <div className="buttons"></div>
                </div>
            </div>
        </div>

    );
}

export default Header;