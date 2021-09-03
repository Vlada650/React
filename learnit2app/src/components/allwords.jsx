import './mainpage.scss';
import React, { useState } from "react";

function Allwords(props) {

    const [isSelected, toggleSelected] = useState(false)
    const [valueEn, setValueEn] = useState(props.english)
    const [valueRu, setValueRu] = useState(props.russian)
    const [valueTr, setValueTr] = useState(props.transcription)
    //const [cancel] = useState(false)

    {/*const cancel = () => {
        document.getElementById('english').value = valueEn
    */}

    return (
        <tbody>
            {
                isSelected ? (<tr className="table" >
                    <td className="table__text"><input type="text" id="english" onBlur={() => { toggleSelected(false) }} onChange={(val) => setValueEn(val.target.value)} value={valueEn}></input></td>
                    <td className="table__text"><input type="text" onBlur={() => { toggleSelected(false) }} onChange={(val) => setValueTr(val.target.value)} value={valueTr}></input></td>
                    <td className="table__text"><input type="text" onBlur={() => { toggleSelected(false) }} onChange={(val) => setValueRu(val.target.value)} value={valueRu}></input></td>
                    <td className="table__text">{props.unit}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { toggleSelected(false) }}>Save</button>
                        <button className="table__button-btn" onClick={() => { toggleSelected(false) }}>Cancel</button>
                    </td>
                </tr>)
                    : (<tr className="table" >
                        <td className="table__text">{valueEn}</td>
                        <td className="table__text">{valueTr}</td>
                        <td className="table__text">{valueRu}</td>
                        <td className="table__text">{props.unit}</td>
                        <td className="table__button">
                            <button className="table__button-btn" onClick={() => { toggleSelected(true) }}>Edit</button>
                            <button className="table__button-btn">Delete</button></td> </tr>)
            }
        </tbody>)
}

export default Allwords;