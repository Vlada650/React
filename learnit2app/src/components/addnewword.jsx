import React, { useState, useEffect } from "react";
import styles from './mainpage.scss';
import LoadingComponent from "./loadingComponent";

export default function AddNewWord() {
    const [value, setValue] = useState({
        russian: '',
        english: '',
        transcription: '',
        tags: '',
    });

    const funcCancel = () => {
        setValue({
            russian: '',
            english: '',
            transcription: '',
            tags: '',
        })
    };

    const funcSave = () => {
        fetch(`/api/words/add`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: value.english,
                russian: value.russian,
                transcription: value.transcription,
                tags: value.tags
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
        // .then(() => loadWords())
    }

    /* const validateFunc = () => {
         if (value.english.match(/[А-Яа-яЁё]/gm)) {
             setError({ english: 'Только латинские буквы' })
         } else if (value.russian.match(/[A-Za-z]/gm)) {
             setError({ russian: 'Только русские буквы' })
         } else {
             console.log("ok")
         }
     }*/
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        //setError({ ...error, [e.target.name]: !e.target.value.trim() })
    };

    return (
        // <LoadingComponent isLoading={isLoading} error={error}>
        <div className="newword-form">
            <tr className="table" >
                <td className="table__text">
                    <input type="text" name={'english'} value={value.english}
                        onChange={handleChange}

                    />
                </td>
                <td className="table__text">
                    <input type="text" name={'transcription'} value={value.transcription}
                        onChange={handleChange}
                    />
                </td>
                <td className="table__text">
                    <input type="text" name={'russian'} value={value.russian}
                        onChange={handleChange}
                    />
                </td>
                <td className="table__text">
                    <input type="text" name={'tags'} value={value.tags}
                        onChange={handleChange}
                    />
                </td>
                <td className="table__button">
                    <button className="table__button-btn" onClick={funcCancel}>Cancel</button>
                    <button className="table__button-btn" onClick={funcSave}>Save</button></td>
            </tr>
        </div >
        //</LoadingComponent>
    );
}