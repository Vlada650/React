import React, { useState, useEffect } from "react";
import './mainpage.scss';
import WordsTable from './wordstable'
import LoadingComponent from "./loadingComponent";

const Allwords = ({ words }) => {

    /*const [words, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        loadWords()
    }, []);

    const loadWords = () => {
        fetch('/api/words')
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
    const { english, russian, tags } = words

    return (
        //<LoadingComponent isLoading={isLoading} error={error}>
        <table>
            <thead>
                <tr>
                    <th className="popup__container-table" >English</th>
                    <th className="popup__container-table" >Transcription</th>
                    <th className="popup__container-table" >Russian</th>
                    <th className="popup__container-table" >Unit</th>
                    <th className="popup__container-table" >Buttons</th>
                </tr>
            </thead>
            <tbody>
                {words.map((words) => {
                    return (
                        <WordsTable key={english} words={words} /*key={id} loadWords={loadWords}*/ />)
                })}
            </tbody>
        </table>
        //</LoadingComponent>
    )
}
export default Allwords;