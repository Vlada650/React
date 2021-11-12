import {action, makeObservable, observable} from 'mobx'

export default class MainComponentStore{
   error = null;
   isLoading = false;
   words = [];

    constructor (){
        makeObservable (
            this, {
                words: observable,
                error: observable,
                isLoading: observable,
                loadWords:action,
            })
            this.words=[];
            this.error = null; 
            this.isLoading = false; 
    };    

    loadWords = (words) => {
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
               words = response;
                this.isLoading = false; 
            })
            .catch(error => {
                this.error = null; 
                this.isLoading = false; 
            });
    }     
}