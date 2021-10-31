import React, { useState, useEffect } from 'react';
import Header from './header';
import MainPage from "./mainPage";
import CardSlider from './cardSlider';
import Footer from './footer';
import LoadingComponent from "./loadingComponent";
import ErrorComponent from './errorComponent'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

export default function MainComponent() {

    const [words, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        loadWords()
    }, []);

    const loadWords = () => {
        fetch('/api/words/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
            .then((response) => {
                setData(response)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            });
    }
    const { id } = words

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <LoadingComponent isLoading={isLoading} error={error} words={words}>
                        <Route exact path="/game">
                            <CardSlider words={words} />
                        </Route>
                        <Route exact path="/">
                            <MainPage words={words} id={id}  setIsLoading={setIsLoading} loadWords={loadWords} />
                        </Route>
                    </LoadingComponent>
                    <Route path="*"><ErrorComponent /></Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}