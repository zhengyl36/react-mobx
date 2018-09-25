import {observable, action} from 'mobx'

class NumStore {
    @observable numbers = 10;

    @action increase = () => {
        this.numbers += 1;
    }

    @action decrease = () => {
        this.numbers -= 1;
    }
}

const numStore = new NumStore();
export default numStore