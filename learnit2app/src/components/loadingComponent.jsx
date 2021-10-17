import React from "react";
import './main.scss';

const LoadingComponent = ({ isLoading, error, children }) => {
    if (isLoading) {
        return <p className="loading">Loading... Please, wait</p>
    }

    if (error) {
        return <p className="loading">Что-то пошло не так</p>
    }

    return children
}

export default LoadingComponent;