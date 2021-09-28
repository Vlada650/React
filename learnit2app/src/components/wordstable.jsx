import React, { useState } from "react";
import './mainpage.scss';

export default function WordsTable({ words }) {
    const { english, russian, transcription, unit } = words
    const [isSelected, toggleSelected] = useState(false);
    const [isValid, setValid] = useState(true);

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

    const funcSave = (e) => {
        toggleSelected(false)
        setValue({ [e.target.name]: e.target.value })
    }

    const funcDelete = () => { }

    const handleChange = (e) => {
        if (e.target.value == '') {
            setValid(false)
        } else {
            setValid(true)
        }

        setValue((prevWord) => {
            return { ...prevWord, [e.target.name]: e.target.value };
        });
    };
    console.log(isValid)
    return (
        <>{isSelected ? (
            <tr className="table" >
                <td className="table__text">
                    <input type="text" defaultValue={value.english}
                        onChange={handleChange}
                    //className={!isValid && "unvalid"} 
                    />
                </td>
                <td className="table__text">
                    <input type="text" defaultValue={value.transcription}
                        onChange={handleChange}
                    //className={!isValid && "unvalid"} 
                    />
                </td>
                <td className="table__text">
                    <input type="text" defaultValue={value.russian}
                        onChange={handleChange} />
                </td>
                <td className="table__text">
                    <input type="text" defaultValue={value.unit}
                        onChange={handleChange} />
                </td>
                <td className="table__button">
                    <button className="table__button-btn" onClick={funcCancel}>Cancel</button>
                    <button className="table__button-btn" onClick={funcSave}>Save</button></td>
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