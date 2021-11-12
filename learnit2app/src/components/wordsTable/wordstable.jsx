import React from "react";
import './wordsTable.scss';
import InputForm from "../inputForm/inputForm";

import {observer, inject} from "mobx-react";
const  WordsTable = inject(['WordsTableStore'])(observer(({WordsTableStore, words, id}) => {

  /* const { english, russian, transcription, tags, id } = words;
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

    const funcDelete = () => {
        console.log('1step')
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
            .then(loadWords)
        console.log('2step')

    };*/

    return (
        <> 
            {WordsTableStore.isSelected ? (<InputForm
                words={words} id={id} />)
                : (<tr className="table" >
                    <td className="table__text">{WordsTableStore.value.english}</td>
                    <td className="table__text">{WordsTableStore.value.transcription}</td>
                    <td className="table__text">{WordsTableStore.value.russian}</td>
                    <td className="table__text">{WordsTableStore.value.tags}</td>
                    <td className="table__button">
                        <button className="table__button-btn" onClick={() => { WordsTableStore.toggleSelected(true) }}>Edit</button>
                        <button className="table__button-btn" onClick={WordsTableStore.funcDelete}>Delete</button></td>
                </tr>)
            }
                   
        </>
    )
}))
export default  WordsTable;