import React from "react";
import './mainpage.scss';
import logo from "../assets/images/logo.png";

export default function Header() {

    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="header__promo">Just learn it!</span>
            <button className="header__popup-shower">Добавить новое слово</button>
        </div >
    );
}