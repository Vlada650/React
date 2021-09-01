import React, { useState } from 'react';
import './tariffs.css'

function List(props) {

    const [checked, setChecked] = useState(false)

    return (
        <div className={"mainContainer" + (props.price == 550 ? " selected__card" : "")} {...props} onClick={() => { setChecked(true) }} id="container"> {
            checked
                ? (<div className="checked" tabindex="0" onBlur={() => { setChecked(false) }}>
                    <button className="checked__circle">&#10004;</button>
                </div>)
                : (<div> <div className={"mainContainer__header" + (props.price == 550 ? " selected__tariff + selected__header" : "")}>{props.header}</div>
                    <div className={"mainContainer__price" + (props.price == 550 ? " selected__tariff" : "")}>
                        <span className="mainContainer__currency">руб</span>  <span className="mainContainer__sum"> {props.price} </span> <span className="mainContainer__month">/мес</span>
                    </div  >
                    <div className="mainContainer__speed">{props.speed}</div>
                    <div className="mainContainer__text">Объем включенного трафика не ограничен</div></div>)
        }
        </div>
    )

}
export default List;