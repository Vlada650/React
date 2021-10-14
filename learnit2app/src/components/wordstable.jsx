import React, { useState } from "react";
import './mainpage.scss';
import InputForm from "./inputForm";

export default function WordsTable({ words, key, loadWords }) {
    const { id, english, russian, transcription, tags } = words;
    const [isSelected, toggleSelected] = useState(false);

    const [error, setError] = useState({
        russian: false,
        english: false,
        transcription: false,
        tags: false,
    });
    const [value, setValue] = useState({
        id: id,
        russian: russian,
        english: english,
        transcription: transcription,
        tags: tags,
    });

    /* const funcDelete = (id) => {
         fetch(`/api/words/${id}/delete`, {
             method: 'POST',
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
         .then(loadWords)
     };*/

    return (
        <>
            {isSelected ? (<InputForm
                words={words} key={key}
                loadWords={loadWords}
                toggleSelected={toggleSelected}
                setError={setError} error={error}
                setValue={setValue} value={value} />)
                : (<tr className="table" >
                    <td className="table__text">{value.english}</td>
                    <td className="table__text">[{value.transcription}]</td>
                    <td className="table__text">{value.russian}</td>
                    <td className="table__text">{value.tags}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { toggleSelected(true) }}>Edit</button>
                        <button className="table__button-btn" /*onClick={funcDelete(id)}*/>Delete</button></td>
                </tr>)}
        </>
    )
}