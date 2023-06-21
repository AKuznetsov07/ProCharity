import Popup from './Popup';
export class MessagePopup extends Popup {

    constructor() {
        super();
    }
    getPopupType() {
        return 'message';
    }
    configurePopup(configuration) {
        super.closePopup(configuration);
        //»конка, заголовок, текст
    }
}