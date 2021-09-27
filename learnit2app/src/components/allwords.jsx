import React from "react";
import './mainpage.scss';
import WordsTable from './wordstable'

const Allwords = ({ words }) => {

    const { english, russian, transcription, unit } = words

    //const defaultColumns = ['english', 'russian', 'transcription', 'unit']

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
                        <WordsTable name={words} words={words} />)
                })}
            </tbody>
        </table>
    )
}
export default Allwords;