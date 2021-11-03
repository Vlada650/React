import {action, makeObservable, observable} from 'mobx'

export default class AddNewWordStore{
    value = {
        russian: '',
        english: '',
        transcription: '',
        tags: '',
    };
    error = {
        russian: false,
        english: false,
        transcription: false,
    }

    constructor (){
        makeObservable (
            this, {
                value: observable,
                error: observable, 
                handleChange: action,
                validateFunc: action,
                funcCancel: action,
                funcSave: action,
            })
        this.value = {
            russian: '',
            english: '',
            transcription: '',
            tags: '',
        };
        this.error = {
            russian: false,
            english: false,
            transcription: false,
        };
       
    }; 

    handleChange = (e) => {
        this.value = { ...this.value, [e.target.name]: e.target.value };
        this.error = { ...this.error, [e.target.name]: !e.target.value.trim() };
    }

    validateFunc = () => {
        debugger
        if (this.value.english.match(/[А-Яа-яЁё]/gm)) {
            this.error = { ...this.error, english: 'Только латинские буквы' }
        } else if (this.value.transcription.match(/[А-Яа-яЁё]/gm)) {
            this.error = { ...this.error, transcription: 'Только латинские буквы'}
        } else if (this.value.russian.match(/[A-Za-z]/gm)) {
                this.error = { ...this.error, russian: 'Только русские буквы'}
        } else {
            this.error = { 
                russian: '',
                english: '',
                transcription: '',
            }
        }
    }
    
    funcCancel = () => {
        this.value = {
            russian: '',
            english: '',
            transcription: '',
            tags: '',
        };
        this.error = {
            russian: '',
            english: '',
            transcription: ''
        }
    }

    funcSave = () => {
        fetch('/api/words/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: this.value.english,
                russian: this.value.russian,
                transcription: this.value.transcription,
                tags: this.value.tags
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
            this.value = {
                russian: '',
                english: '',
                transcription: '',
                tags: '',
            };
        }
};