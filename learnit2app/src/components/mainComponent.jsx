import React, { useEffect } from 'react';
import Header from './header';
import MainPage from "./mainPage";
import CardSlider from './cardSlider';
import Footer from './footer';
import LoadingComponent from "./loadingComponent";
import ErrorComponent from './errorComponent';
import '../assets/styles/style.scss';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import { observer, inject } from "mobx-react";

const MainComponent = inject(['MainComponentStore'])(observer(({ MainComponentStore }) => {
    useEffect(() => {
        MainComponentStore.loadWords();
    }, []);
    /* const [words, setData] = useState([]);
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
     }*/

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <LoadingComponent isLoading={MainComponentStore.isLoading} error={MainComponentStore.error} words={MainComponentStore.words}>
                    <Switch>
                        <Route exact path="/game">
                            <CardSlider words={MainComponentStore.words} />
                        </Route>
                        <Route exact path="/">
                            <MainPage key={MainComponentStore.id} words={MainComponentStore.words} id={MainComponentStore.id} loadWords={MainComponentStore.loadWords} />
                        </Route>
                        <Route path="/"><ErrorComponent /></Route>
                    </Switch>
                </LoadingComponent>
                <Footer />
            </div>
        </BrowserRouter>
    )
}))

export default MainComponent;
