import React, { useState, useEffect } from 'react';
import Header from './header/index';
import MainPage from "./mainPage";
import Gallery from './cardslider';
import AddNeWord from './addnewword';
import Footer from './footer/index';
import LoadingComponent from "./loadingComponent";
import ErrorComponent from './errorComponent'
import './mainpage.scss';
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

    const loadWords = (id) => {
        fetch(`/api/words/${id}`, {
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
                    <LoadingComponent isLoading={isLoading} error={error} >
                        <Route exact path="/game">
                            <Gallery words={words} key={id} />
                        </Route>
                        <Route exact path="/add">
                            <AddNeWord />
                        </Route>
                        <Route exact path="/">
                            <MainPage words={words} key={id} loadWords={loadWords} />
                        </Route>
                    </LoadingComponent>
                    <Route><ErrorComponent /></Route>

                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}