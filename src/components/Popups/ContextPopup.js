import Popup from './Popup';
export class ContextPopup extends Popup {

    constructor() {
        super();
    }

    getPopupType() {
        return 'context';
    }
    configurePopup(configuration) {
        super.closePopup(configuration);
        // действия кнопок контекста
    }
}