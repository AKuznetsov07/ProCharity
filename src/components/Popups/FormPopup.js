import { Popup } from './Popup';
export class FormPopup extends Popup {

    constructor(node) {
        super(node);
        this._type = 'form';
        this.setEventListeners(); 

        this._submitFunc = this._closeFunc;
    }

    submitPopup() {
        this._submitFunc();
    }
    configurePopup(configuration) {
        super.closePopup(configuration);
        //Сабмит, содержимое инпутов
        this._submitFunc = configuration.submitFunc;
    }
}