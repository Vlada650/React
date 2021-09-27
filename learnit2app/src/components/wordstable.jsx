import React, { useState } from "react";
import './mainpage.scss';

export default function WordsTable({ words }) {
    const { english, russian, transcription, unit } = words
    const [isSelected, toggleSelected] = useState(false);

    const [isValid, setValid] = useState(true);

    const funcCancel = () => {
        toggleSelected(false)
        setValue({ ...words })
    }
    const [value, setValue] = useState({
        russian: russian,
        english: english,
        transcription: transcription,
        unit: unit,
    });
    const handleChange = (elem) => {
        if (value == '') {
            setValid(false)
        } else {
            setValid(true)
        }

        setValue((prevWord) => {
            return { ...prevWord, [elem.target.name]: elem.target.value };
        });
    };
    return (
        <>{isSelected ? (
            <tr className="table" >
                <td className="table__text">
                    <input type="text" value={value.english}
                        onChange={handleChange} className={!isValid && "unvalid"} />
                </td>
                <td className="table__text">
                    <input type="text" value={value.russian}
                        onChange={handleChange}
                        className={!isValid && "unvalid"} />
                </td>
                <td className="table__text">
                    <input type="text" value={value.transcription}
                        onChange={handleChange} />
                </td>
                <td className="table__text">
                    <input type="text" value={value.unit}
                        onChange={handleChange} />
                </td>
                <td className="table__button">
                    <button className="table__button-btn" onClick={funcCancel}>Cancel</button>
                    <button className="table__button-btn">Save</button></td>
            </tr>)
            : (
                <tr className="table" >
                    <td className="table__text">{english}</td>
                    <td className="table__text">[{transcription}]</td>
                    <td className="table__text">{russian}</td>
                    <td className="table__text">{unit}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { toggleSelected(true) }}>Edit</button>
                        <button className="table__button-btn">Delete</button></td>
                </tr>)
        }
        </>
    )
}