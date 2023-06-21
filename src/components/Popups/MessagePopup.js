import { Popup } from './Popup';
export class MessagePopup extends Popup {
    constructor(node) {
        super(node);
        this._type = 'message';
        this.setEventListeners(); 
    }

    configurePopup(configuration) {
        super.configurePopup(configuration);
        //»конка, заголовок, текст
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    setEventListeners() {
        if (this._popup) {
            this._closeButton = this._popup.querySelector('.popup__btn-close');

            this._closeButton.addEventListener('click', () => {
                this.closePopup()
            })
        }
    }
}