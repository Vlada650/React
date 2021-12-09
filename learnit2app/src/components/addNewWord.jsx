import React, { useState } from "react";
import { observer, inject } from "mobx-react";

const AddNewWord = inject(['MainComponentStore'])(observer(({ MainComponentStore }) => {

    const [value, setValue] = useState({
        russian: '',
        english: '',
        transcription: '',
        tags: '',
    });

    const [error, setError] = useState({
        russiane: false,
        englishe: false,
        transcriptione: false
    });

    const funcCancel = () => {
        setValue({
            russian: '',
            english: '',
            transcription: '',
            tags: '',
        });
        setError({
            russiane: '',
            englishe: '',
            transcriptione: ''
        });
    };


    const addWord = () => {
        MainComponentStore.addWord(value)
    }
    /*const funcSave = () => {
        fetch('/api/words/add', {
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
            .then(setValue({
                russian: '',
                english: '',
                transcription: '',
                tags: '',
            }))
    }*/

    const validateFunc = () => {
        if (value.english.match(/[А-Яа-яЁё]/gm)) {
            setError({ ...error, englishe: 'Только латинские буквы' })
        } else if (value.russian.match(/[A-Za-z]/gm)) {
            setError({ ...error, russiane: 'Только русские буквы' })
        } else if (value.transcription.match(/[А-Яа-яЁё]/gm)) {
            setError({ ...error, transcriptione: 'Только латинские буквы' })
        } else {
            setError('')
        }
    }

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: !e.target.value.trim() })
    };

    return (
        <div className="newword-form">
            <div className="newword-promo">Добавь своё слово:</div>
            <tr className="newword-table" >
                <td className="addtable__text">
                    <input type="text" name={'english'} value={value.english}
                        onChange={handleChange} onBlur={validateFunc}
                        className={error.englishe ? 'errorinput' : " "} placeholder="Слово"
                    /><span><br />{error.englishe && error.englishe}</span>
                </td>
                <td className="addtable__text">
                    <input type="text" name={'transcription'} value={value.transcription} onBlur={validateFunc}
                        onChange={handleChange} className={error.transcriptione ? 'errorinput' : " "} placeholder="Транскрипция"
                    /><span><br />{error.transcriptione && error.transcriptione}</span>
                </td>
                <td className="addtable__text">
                    <input type="text" name={'russian'} value={value.russian}
                        onChange={handleChange} onBlur={validateFunc} placeholder="Перевод"
                        className={error.russiane ? 'errorinput' : " "}
                    /> <span><br />{error.russiane && error.russiane}</span>
                </td>
                <td className="addtable__text">
                    <input type="text" name={'tags'} value={value.tags} placeholder="Теги"
                        onChange={handleChange}
                    />
                </td>
                <td className="addtable__button">
                    <button className="addtable__button-btn" onClick={funcCancel}>Cancel</button>
                    <button className="addtable__button-btn" onClick={addWord}>Save</button></td>
            </tr>
        </div >
    )
}))

export default AddNewWord;
