import React from "react";
import './hero.css'

function Hero(props) {
    return (
        <section className="hero-card">
            <img src={props.url} alt="hero" />
            <div className="hero-name">Имя: {props.name}</div>
            <div className="hero-alterEgo">Прозвище: {props.alterEgo}</div>
            <div className="hero-occupation">Род деятельности:{props.occupation}</div>
            <div className="hero-superpower">Суперсилы: {props.superpower}</div>
            <div className="hero-more">Больше: {props.more}</div>
        </section>
    );
}

export default Hero;