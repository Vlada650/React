import React, { useState, useEffect } from "react";
import './mainpage.scss';
import WordsTable from './wordstable'

const Allwords = ({ words }) => {

    /* const [words, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null)
 
     useEffect(() => {
         setIsLoading(true);
         fetch('/api/words')
             .then(response => {
                 if (response.ok) {
                     return response.json();
                 } else {
                     throw new Error('Что-то пошло не так');
                 }
             })
             .then((response) => setData({ words: response, isLoading: false }))
             .catch(error => setData({ error, isLoading: false }));
     }, []);*/

    const { id, english, russian, transcription } = words
    /*if (isLoading) {
        return <p className="loading">Loading... Please, wait</p>
    }

    if (error) {
        return <p className="loading">Что-то пошло не так</p>
    }*/

    return (
        <table>
            <thead>
                <tr>
                    <th className="popup__container-table" id="english">English</th>
                    <th className="popup__container-table" id="sound">Transcription</th>
                    <th className="popup__container-table" id="russian">Russian</th>
                    <th className="popup__container-table" id="unit">Unit</th>
                    <th className="popup__container-table" id="buttons">Buttons</th>
                </tr>
            </thead>
            <tbody>
                {words.map((words) => {
                    return (
                        <WordsTable key={english} name={words} words={words} />)
                })}
            </tbody>
        </table>
    )
}
export default Allwords;