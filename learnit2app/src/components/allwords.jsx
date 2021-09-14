import React, { useState } from "react";
import './mainpage.scss';

const Allwords = ({ word }) => {
    const { english, russian, transcription, unit } = word
    const [isSelected, toggleSelected] = useState(false)
    const [value, setValue] = useState({
        russian: russian,
        english: english,
        transcription: transcription,
        unit: unit
    });

    const handleChange = (elem) => {
        setValue((prevWord) => {
            return { ...prevWord, [elem.target.name]: elem.target.value };
        });
    };

    const defaultColumns = ['english', 'russian', 'transcription']

    const funcCancel = () => {
        toggleSelected(false)
        setValue({ ...word })
    }
    return (
        <tbody> {isSelected ? (<>
            {defaultColumns.map(w => {
                return (
                    <button>
                        handleSelected={toggleSelected} handleChange={handleChange} name={w} value={value[w]}
                        <button className="table__button-btn" onClick={funcCancel}>Cancel</button>
                        <button className="table__button-btn">Save</button></button>
                )
            })
            }
        </>
        )
            : (
                <tr className="table" >
                    <td className="table__text">{value.english}</td>
                    <td className="table__text">[{value.transcription}]</td>
                    <td className="table__text">{value.russian}</td>
                    <td className="table__text">{value.unit}</td>
                    <td className="table__button">
                        <button className="table__button-btn">Edit</button>
                        <button className="table__button-btn">Delete</button></td>
                </tr>)
        }
        </tbody >
    )
}
export default Allwords;