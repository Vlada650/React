import React from "react";
import Allwords from "./allwords";
import './mainpage.scss';

export default function WordsTable(props) {
    return (
        <>
            {
                props.words.map((word) => (
                    <Allwords key={word.english} english={word.english} russian={word.russian} transcription={word.transcription} unit={word.unit} />))
            }
        </>
    )
}