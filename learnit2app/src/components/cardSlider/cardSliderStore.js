/*import {action, makeObservable, observable} from 'mobx'

class cardSliderStore{
    position

    constructor (){
        makeObservable (
            this, {
                position: observable,
                prevCardHandler: action,
                nextCardHandler: action,
            })
        this.position = 0
    } 

     prevCardHandler  = (position) => {
        if (position > 0) {
            return position = position - 1
        }
    }

     nextCardHandler = () => {
        if (this.position >= words.length - 1) {
            this.position = 0
        } else {
            this.position = position + 1
        }
    };
}

export default cardSliderStore;*/