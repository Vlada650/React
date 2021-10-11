import React, { useState } from "react";
import styles from './mainpage.scss';

export default function WordsTable({ words /*loadWords*/ }) {
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

    const btnDisabled = Object.values(error).some(el => el);

    const funcCancel = () => {
        toggleSelected(false)
        setValue({ ...words })
        setError(false)
    };

    const funcDelete = (id) => {
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
        //.then(() => loadWords())
    };

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: !e.target.value.trim() })
    };
    const funcSave = () => {
        toggleSelected(false);
        fetch(`/api/words/${id}/update`, {
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
        //.then(() => loadWords())
    }

    const validateFunc = () => {
        if (value.english.match(/[А-Яа-яЁё]/gm)) {
            setError({ english: 'Только латинские буквы' })
        } else if (value.russian.match(/[A-Za-z]/gm)) {
            setError({ russian: 'Только русские буквы' })
        } else {
            console.log("ok")
        }
    }

    return (<>
        {isSelected ? (
            <tr className="table" >
                <td className="table__text">
                    <input type="text" name={'english'} value={value.english}
                        onChange={handleChange} onBlur={validateFunc}
                        className={error.english ? styles.errorinput : " "}
                    /><span>{error.english && error.english}</span>
                </td>
                <td className="table__text">
                    <input type="text" name={'transcription'} value={value.transcription}
                        onChange={handleChange}
                        className={error.transcription ? styles.errorinput : " "}
                    />
                </td>
                <td className="table__text">
                    <input type="text" name={'russian'} value={value.russian}
                        onChange={handleChange}
                        className={error.russian ? styles.errorinput : " "}
                    /> <span>{error.russian && error.russian}</span>
                </td>
                <td className="table__text">
                    <input type="text" name={'tags'} value={value.tags}
                        onChange={handleChange}
                        className={error.tags ? styles.errorinput : " "}
                    />
                </td>
                <td className="table__button">
                    <button className="table__button-btn" onClick={funcCancel}>Cancel</button>
                    <button className="table__button-btn" disabled={btnDisabled} onClick={funcSave}>Save</button></td>
            </tr>)
            : (
                <tr className="table" >
                    <td className="table__text">{value.english}</td>
                    <td className="table__text">[{value.transcription}]</td>
                    <td className="table__text">{value.russian}</td>
                    <td className="table__text">{value.tags}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { toggleSelected(true) }}>Edit</button>
                        <button className="table__button-btn" onClick={funcDelete(id)}>Delete</button></td>
                </tr>)
        }
    </>
    )
}