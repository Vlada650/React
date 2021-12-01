import { makeAutoObservable } from 'mobx'

export default class MainComponentStore {
    error = null;
    isLoading = false;
    words = [];

    constructor() {
        makeAutoObservable(this)
    };

    loadWords = () => {
        //this.isLoading = true;
        fetch('/api/words/', {
            method: 'GET',
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
            .then((response) => {
                this.words = response;
                this.isLoading = false;
            })
            .catch(error => {
                this.error = null;
                this.isLoading = false;
            });
    }

    addWord = (english, russian, transcription, tags) => {
        this.isLoading = true;
        fetch('/api/words/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: english,
                russian: russian,
                transcription: transcription,
                tags: tags
            })
        })
            .then(response => {
                if (response.ok) {
                    this.loadWords();
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
            .catch(error => {
                this.error = null;
                this.isLoading = false;
            });
    }

    funcDelete = (id) => {
        this.isLoading = true;
        fetch(`/api/words/${id}/delete`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    this.loadWords();
                    window.location.reload();
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })

    }

    funcSave = (id, english, russian, transcription, tags) => {

        fetch(`/api/words/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: id,
                english: english,
                russian: russian,
                transcription: transcription,
                tags: tags
            })
        })
            .then(response => {
                if (response.ok) {
                    this.loadWords();;
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
            .catch(error => {
                this.error = null;
                this.isLoading = false;
            });
    }
}