import React from "react";
import WordsTable from './wordstable';
import './mainpage.scss';
import Allwords from "./allwords";

export default function MainPage({ words }) {
    return (
        <div className="popup__container">
            <thead>
                <tr>
                    <th className="popup__container-table" id="english">English</th>
                    <th className="popup__container-table" id="sound">Transcription</th>
                    <th className="popup__container-table" id="russian">Russian</th>
                    <th className="popup__container-table" id="unit">Unit</th>
                    <th className="popup__container-table" id="buttons">Buttons</th>
                </tr>
                {/*<WordsTable words={words} />*/}
                <Allwords words={words} />

            </thead >
        </div>
    );
};