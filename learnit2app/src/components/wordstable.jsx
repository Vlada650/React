import React, { useState } from "react";
import './mainpage.scss';

export default function WordsTable({ words }) {
    const { english, russian, transcription, unit } = words
    const [isSelected, toggleSelected] = useState(false);
    const [error, setError] = useState(false)
    const [value, setValue] = useState({
        russian: russian,
        english: english,
        transcription: transcription,
        unit: unit,
    });

    const funcCancel = () => {
        toggleSelected(false)
        setValue({ ...words })
    }

    const funcDelete = () => { }

    const handleChange = (e) => {
        setValue({ [e.target.name]: e.target.value });
    };

    const funcSave = (e) => {
        toggleSelected(false);
        console.log({ [e.target.name]: e.target.value })
    }

    const validateFunc = (e) => {
        if (e.target.value === "") {
            setError(true)
        }
    }

    let nameColor = error === true ? { borderColor: 'red' } : { borderColor: 'green' };
    return (<>
        <div>{error ? <span>Заполните все поля!</span> : ''}</div>
        {isSelected ? (
            <tr className="table" >
                <td className="table__text">
                    <input type="text" value={value.english}
                        onChange={handleChange} onBlur={validateFunc} style={nameColor} />
                </td>
                <td className="table__text">
                    <input type="text" value={value.transcription}
                        onChange={handleChange} onBlur={validateFunc} style={nameColor}
                    />
                </td>
                <td className="table__text">
                    <input type="text" value={value.russian}
                        onChange={handleChange} onBlur={validateFunc} style={nameColor} />
                </td>
                <td className="table__text">
                    <input type="text" value={value.unit}
                        onChange={handleChange} onBlur={validateFunc} style={nameColor} />
                </td>
                <td className="table__button">
                    <button className="table__button-btn" onClick={funcCancel}>Cancel</button>
                    <button className="table__button-btn" disabled={!error} onClick={funcSave}>Save</button></td>
            </tr>)
            : (
                <tr className="table" >
                    <td className="table__text">{english}</td>
                    <td className="table__text">[{transcription}]</td>
                    <td className="table__text">{russian}</td>
                    <td className="table__text">{unit}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { toggleSelected(true) }}>Edit</button>
                        <button className="table__button-btn" onClick={funcDelete}>Delete</button></td>
                </tr>)
        }
    </>
    )
}