import React from "react";
import './mainpage.scss';
import WordsTable from './wordstable'

const MainPage = ({ words, key, loadWords }) => {
    return (
        <table className="popup__container">
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
                        <WordsTable words={words} key={key} loadWords={loadWords} />)
                })}
            </tbody>
        </table>
    )
}
export default MainPage;