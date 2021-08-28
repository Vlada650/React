import React from 'react';
import './tariffs.css'

function List(props) {
    return (
        <div className="mainContainer" >
            <div className="mainContainer__header">{props.header}</div>
            <div className="mainContainer__price">
                <div className="mainContainer__currency">{props.currency}</div>
                <span className="mainContainer__sum">{props.price}</span>
                <div className="mainContainer__month">{props.month}</div>
            </div>
            <div className="mainContainer__speed">{props.speed}</div>
            <div className="mainContainer__text">{props.text}</div>
        </div>
    )
}
export default List;