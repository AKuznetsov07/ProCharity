export default class Popup {
    constructor(popup) {
    this._popup = popup;
        this._closeFunc = this.close;
        this.setEventListeners(); 
    }

    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    closePopup() {
        this._closeFunc();
    }

    getPopupId() {
        return this._popup.getAttribute('id');
    }

    getPopupType() {
        return 'default';
    }

    configurePopup(configuration) {
        this._closeFunc = configuration.closeFunc;
    }

    setEventListeners() {
        if (this._popup) {
            this._closeButton = this._popup.querySelector('.popup__btn-close');

            this._closeButton.addEventListener('click', () => { this.closePopup() })
        }
    }
}
