import React from "react";
import './mainPage.scss';
import WordsTable from '../wordsTable/wordstable'
import AddNewWord from "../addNewWord/addNewWord";
const MainPage = ({ key, words, id, loadWords }) => {
    return (
        <>
            <AddNewWord loadWords={loadWords} />
            <table className="main">
                <thead>
                    <tr>
                        <th className="main__container" >English</th>
                        <th className="main__container" >Transcription</th>
                        <th className="main__container" >Russian</th>
                        <th className="main__container" >Unit</th>
                        <th className="main__container" >Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((words) => {
                        return (
                            <WordsTable key={key} words={words} id={id} loadWords={loadWords} />)
                    })}
                </tbody>
            </table>
        </>
    )
}
export default MainPage;