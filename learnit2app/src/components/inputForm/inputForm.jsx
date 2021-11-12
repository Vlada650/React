import React from "react";
import './inputForm.scss';
import {observer, inject} from "mobx-react";

const InputForm = inject(['InputFormStore'])(observer(({InputFormStore, words}) => {

/*const btnDisabled = Object.values(error).some(el => el);
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: !e.target.value.trim() })
    };

    const validateFunc = () => {
        if (value.english.match(/[А-Яа-яЁё]/gm)) {
            setError({ ...error, english: 'Только латинские буквы' })
        } else if (value.russian.match(/[A-Za-z]/gm)) {
            setError({ ...error, russian: 'Только русские буквы' })
        } else if (value.transcription.match(/[А-Яа-яЁё]/gm)) {
            setError({ ...error, transcription: 'Только латинские буквы' })
        } else {
            console.log("ok")
        }
    }

    const funcCancel = () => {
        toggleSelected(false)
        setValue({ ...words })
        setError(false)
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
            .then(loadWords)
    }*/
    return (
        <tr className="table" >
            <td className="table__text">
                <input type="text" name={'english'} value={InputFormStore.value.english}
                    onChange={InputFormStore.handleChange} onBlur={InputFormStore.validateFunc}
                    className={InputFormStore.error.english ? 'errorinput' : " "}
                /><span><br />{InputFormStore.error.english && InputFormStore.error.english}</span>
            </td>
            <td className="table__text">
                <input type="text" name={'transcription'} value={InputFormStore.value.transcription}
                    onChange={InputFormStore.handleChange} onBlur={InputFormStore.validateFunc}
                    className={InputFormStore.error.transcription ? 'errorinput' : " "}
                /><span><br />{InputFormStore.error.transcription && InputFormStore.error.transcription}</span>
            </td>
            <td className="table__text">
                <input type="text" name={'russian'} value={InputFormStore.value.russian}
                    onChange={InputFormStore.handleChange} onBlur={InputFormStore.validateFunc}
                    className={InputFormStore.error.russian ? 'errorinput' : " "}
                /> <span><br />{InputFormStore.error.russian && InputFormStore.error.russian}</span>
            </td>
            <td className="table__text">
                <input type="text" name={'tags'} value={InputFormStore.value.tags}
                    onChange={InputFormStore.handleChange}
                    className={InputFormStore.error.tags ? 'errorinput' : " "}
                />
            </td>
            <td className="table__button">
                <button className="table__button-btn" onClick={InputFormStore.funcCancel}>Cancel</button>
                <button className="table__button-btn"  onClick={InputFormStore.funcSave}>Save</button></td>
        </tr>
    )
}))

export default InputForm;