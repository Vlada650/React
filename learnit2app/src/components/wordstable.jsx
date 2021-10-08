import React, { useState } from "react";
import styles from './mainpage.scss';

export default function WordsTable({ words }) {
    const { english, russian, transcription, unit } = words
    const [isSelected, toggleSelected] = useState(false);
    const [error, setError] = useState({
        russian: false,
        english: false,
        transcription: false,
        unit: false,
    })
    const [value, setValue] = useState({
        russian: russian,
        english: english,
        transcription: transcription,
        unit: unit,
    });

    const funcCancel = () => {
        toggleSelected(false)
        setValue({ ...words })
        setError(false)
    }
    const btnDisabled = Object.values(error).some(el => el)
    const funcDelete = () => { }
    const handleChange = (e) => {
        setValue({ [e.target.name]: e.target.value });
        setError({ [e.target.name]: !e.target.value.trim() })
    };
    const funcSave = () => {
        toggleSelected(false);
        console.log(value)
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
                    <input type="text"  name={'russian'} value={value.russian}
                        onChange={handleChange}
                        className={error.russian ? styles.errorinput : " "}
                    /> <span>{error.russian && error.russian}</span>
                </td>
                <td className="table__text">
                    <input type="text"  name={'transcription'}  value={value.transcription}
                        onChange={handleChange}
                        className={error.transcription ? styles.errorinput : " "}
                    />
                </td>
                <td className="table__text">
                    <input type="text"  name={'unit'}  value={value.unit}
                        onChange={handleChange}
                        className={error.unit ? styles.errorinput : " "}
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
                    <td className="table__text">{value.unit}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { toggleSelected(true) }}>Edit</button>
                        <button className="table__button-btn" onClick={funcDelete}>Delete</button></td>
                </tr>)
        }
    </>
    )
}