import React, { useEffect } from 'react';
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

import {observer, inject} from "mobx-react";

const  MainComponent = inject(['MainComponentStore'])(observer(({MainComponentStore, id, error}) => {
    useEffect(() => {
       // setIsLoading(true);
       MainComponentStore.isLoading = true;
       MainComponentStore.loadWords();
    });

    /*const [words, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    
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
    const { id } = words*/

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                 <LoadingComponent words={MainComponentStore.words} isLoading={MainComponentStore.isLoading} error={MainComponentStore.error}>
                       <Switch>
                        <Route exact path="/game">
                            <CardSlider words={MainComponentStore.words} />
                        </Route>
                        <Route exact path="/">
                            <MainPage key={id} words={MainComponentStore.words} id={MainComponentStore.id} loadWords={MainComponentStore.loadWords} />
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