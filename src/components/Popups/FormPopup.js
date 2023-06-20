import Popup from './components/Popup';
export class FormPopup extends Popup {

    constructor() {
        super();
    }

    getPopupType() {
        return 'form';
    }
    configurePopup(configuration) {
        super.closePopup(configuration);
        //Сабмит, содержимое инпутов
    }
}