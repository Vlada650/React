import React from "react";
import './loadingComponent.scss';
import loader1 from '../../assets/images/loader1.gif'

const LoadingComponent = ({ isLoading, error, children, words }) => {
    if (isLoading || !words.length) {
        return <div className="loading"> <img src={loader1} alt="loader" className="loading__img" />
            <p className="loading__promo">Loading... Please, wait</p>
            </div>
    }

    if (error) {
        return <p className="loading">Что-то пошло не так</p>
    }

    return children
}

export default LoadingComponent;