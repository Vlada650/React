import React, { useState, useEffect } from 'react';
import Header from './header/index';
import MainPage from "./mainPage/mainPage";
import CardSlider from './cardSlider/cardSlider';
import Footer from './footer/index';
import LoadingComponent from "./loadingComponent/loadingComponent";
import ErrorComponent from './errorComponent/errorComponent'
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
    //console.log(words.id)
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
                            <MainPage words={words} id={words.id} loadWords={loadWords} />
                        </Route>
                    </LoadingComponent>
                    <Route path="*"><ErrorComponent /></Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}