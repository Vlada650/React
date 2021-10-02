import React from "react";
import './mainpage.scss';
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Header() {

    return (
        <div className="header">
            <Link to="/" ><img src={logo} alt="logo" className="logo-img" /></Link>
            <Link to="/login" ><span className="header__promo">Just learn it!</span></Link>
            <Link to="/game" ><button className="header__popup-shower">Режим тренировки</button></Link>
        </div >
    );
}