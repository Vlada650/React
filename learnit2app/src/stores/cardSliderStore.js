/*import {action, makeObservable, observable} from 'mobx'


export default class cardSliderStore{
    position = 0;
    pushed = false;
    learned = 0;
    words;

    constructor (){
        makeObservable (
            this, {
                position: observable,
                pushed: observable,
                learned: observable,
                prevCardHandler: action,
                nextCardHandler: action,
                btnTranslate: action,
            })
        this.position = 0;
        this.pushed = false;
        this.learned = 0;
    }; 

     prevCardHandler  = () => {
        if (this.position > 0) {
            return this.position = this.position - 1
        }
    };

     nextCardHandler = (words) => {
         debugger
        if (this.position >= words.length - 1) {
            this.position = 0;
        } else {
            this.position =  this.position + 1;
            this.pushed = false;
        }
    };

    btnTranslate = () => {
        this.pushed = true;
        this.learned = this.learned + 1;
    }
};*/