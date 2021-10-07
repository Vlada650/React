import React, { useState, useEffect } from "react";
import './mainpage.scss';
import WordsTable from './wordstable'

const Allwords = ({ words }) => {

    /*const { data, setData } = useState()
    useEffect(() => {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => setData({ words: response }))
    },[]);*/

    const { id, english, russian, transcription } = words
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