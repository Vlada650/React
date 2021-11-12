import React, { useState } from "react";
import './addNewWord.scss';
import {observer, inject} from "mobx-react";

const AddNewWord = inject(['AddNewWordStore'])(observer(({AddNewWordStore}) => {

    /*const [value, setValue] = useState({
        russian: '',
        english: '',
        transcription: '',
        tags: '',
    });

    const [error, setError] = useState({
        russian: false,
        english: false,
        transcription: false
    });
    const funcCancel = () => {
        setValue({
            russian: '',
            english: '',
            transcription: '',
            tags: '',
        });
        setError({
            russian: '',
            english: '',
            transcription: ''
        });
    };

    const funcSave = () => {
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
        loadWords()
        funcCancel()
    }

    const validateFunc = () => {
        if (value.english.match(/[А-Яа-яЁё]/gm)) {
            setError({ ...error, english: 'Только латинские буквы' })
        } else if (value.russian.match(/[A-Za-z]/gm)) {
            setError({ ...error, russian: 'Только русские буквы' })
        } else if (value.transcription.match(/[А-Яа-яЁё]/gm)) {
            setError({ ...error, transcription: 'Только латинские буквы' })
        } else {
            setError('')
        }
    }
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: !e.target.value.trim() })
    };*/

    return ( <div className="newword-form">
    <div className="newword-promo">Добавь своё слово:</div>
    <tr className="newword-table" >
        <td className="addtable__text">
            <input type="text" name={'english'} placeholder="Слово" 
            value={AddNewWordStore.value.english}
            onChange={AddNewWordStore.handleChange} 
            className={AddNewWordStore.error.english ? 'errorinput' : " "}
            onBlur={AddNewWordStore.validateFunc}
            />
            <span><br />{AddNewWordStore.error.english && AddNewWordStore.error.english}</span>
        </td>
        <td className="addtable__text">
            <input type="text" name={'transcription'} placeholder="Транскрипция"
            value={AddNewWordStore.value.transcription}  
            className={AddNewWordStore.error.transcription ? 'errorinput' : " "} 
            onBlur={AddNewWordStore.validateFunc}
            onChange={AddNewWordStore.handleChange} 
            />
            <span><br />{AddNewWordStore.error.transcription && AddNewWordStore.error.transcription}</span>
        </td>
        <td className="addtable__text">
            <input type="text" name={'russian'} placeholder="Перевод"
            value={AddNewWordStore.value.russian}
            onChange={AddNewWordStore.handleChange}   
            className={AddNewWordStore.error.russian ? 'errorinput' : " "} 
            onBlur={AddNewWordStore.validateFunc}/>
            <span><br />{AddNewWordStore.error.russian && AddNewWordStore.error.russian}</span>
        </td>
        <td className="addtable__text">
            <input type="text" name={'tags'} placeholder="Теги"
            value={AddNewWordStore.value.tags} 
            onChange={AddNewWordStore.handleChange}/>
        </td>
        <td className="addtable__button">
            <button className="addtable__button-btn" onClick={AddNewWordStore.funcCancel}>Cancel</button>
            <button className="addtable__button-btn" onClick={AddNewWordStore.funcSave}>Save</button></td>
    </tr>
</div >)
}));
export default AddNewWord;