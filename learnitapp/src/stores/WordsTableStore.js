import {action, makeObservable, observable} from 'mobx'

export default class WordsTableStore{
    words;
    id;
    //isSelected = false;
    value = {
        id: id,
        russian: russian,
        english: english,
        transcription: transcription,
        tags: tags,
    };
    error = {
        russian: false,
        english: false,
        transcription: false,
    };

    constructor (){
        makeObservable (
            this, {
                //isSelected:observable,
                value: observable,
                error: observable,
                funcDelete:action,
            })
            this.value = {
                id: id,
                russian: russian,
                english: english,
                transcription: transcription,
                tags: tags,
            };
            this.error = {
                russian: false,
                english: false,
                transcription: false,
            };
            //this.isSelected = false;
    };    

     funcDelete = (id) => {
        //this.isSelected = false;
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
        }
}