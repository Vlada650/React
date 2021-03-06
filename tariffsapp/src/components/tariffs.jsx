import React, { useState } from 'react';
import './tariffs.css'

function List(props) {

    const [checked, setChecked] = useState(false)

    return (
        <div className="mainContainer" {...props} onClick={() => { setChecked(true) }} id="container" tabIndex="0" onBlur={() => { setChecked(false) }}> {
            checked
                ? (<div className="checked" >
                    <div className={"mainContainer__header" + " selected__tariff + selected__header"}>{props.header}</div>
                    <div className={"mainContainer__price" + " selected__tariff"}>
                        <span className="mainContainer__currency">руб</span>  <span className="mainContainer__sum"> {props.price} </span> <span className="mainContainer__month">/мес</span>
                    </div  >
                    <div className="mainContainer__speed">{props.speed}</div>
                    <div className="mainContainer__text">Объем включенного трафика не ограничен</div>
                </div>)
                : (<div> <div className="mainContainer__header">{props.header}</div>
                    <div className="mainContainer__price">
                        <span className="mainContainer__currency">руб</span>  <span className="mainContainer__sum"> {props.price} </span> <span className="mainContainer__month">/мес</span>
                    </div  >
                    <div className="mainContainer__speed">{props.speed}</div>
                    <div className="mainContainer__text">Объем включенного трафика не ограничен</div></div>)
        }
        </div>
    )

}
export default List;