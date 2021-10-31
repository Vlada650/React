import {action, makeObservable, observable} from 'mobx'

export default class cardSliderStore{
    position = 0;
    pushed = false;
    learned = 0;

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

     prevCardHandler  = (position) => {
        if (position > 0) {
            return position = position - 1
        }
    };

     nextCardHandler = (words, position) => {
        if (this.position >= words.length - 1) {
            this.position = 0
        } else {
            this.position = position + 1;
            this.pushed = false;
        }
    };

    btnTranslate = (learned) => {
        this.pushed = true;
        this.learned = learned + 1;
    }
};