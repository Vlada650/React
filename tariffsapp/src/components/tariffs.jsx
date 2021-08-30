import React from 'react';
import './tariffs.css'

class List extends React.Component {
    render() {
        const { header, currency, price, month, speed, text } = this.props;
        return (
            <div className={"mainContainer" + (price == 550 ? " selected__card" : "")} >
                <div className={"mainContainer__header" + (price == 550 ? " selected__tariff + selected__header" : "")}>{header}</div>
                <div className={"mainContainer__price" + (price == 550 ? " selected__tariff" : "")}>
                    <div className="mainContainer__currency">{currency}</div>
                    <span className="mainContainer__sum">{price}</span>
                    <div className="mainContainer__month">{month}</div>
                </div>
                <div className="mainContainer__speed">{speed}</div>
                <div className="mainContainer__text">{text}</div>
            </div>
        )
    }
}
export default List;