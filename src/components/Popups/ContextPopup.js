import { Popup } from './Popup';
export class ContextPopup extends Popup {

    constructor(node) {
        super(node);
        this._type = 'context';
        this.setEventListeners(); 
    }

    configurePopup(configuration) {
        super.closePopup(configuration);
        // действия кнопок контекста
    }
}