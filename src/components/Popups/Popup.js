export default class Popup {
    constructor(popup) {
    this._popup = popup;
        this._popupType = this._setPopupType();
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
        console.log('closePopup')
        console.log(this._closeFunc)
        this._closeFunc();
    }

    getPopupId() {
        return this._popup.getAttribute('id');
    }

    getPopupType() {
        return 'default';
    }

    configurePopup(configuration) {
        console.log('configurePopup')
        console.log(configuration.closeFunc)
        this._closeFunc = configuration.closeFunc;
    }

    setEventListeners() {
        if (this._popup) {
            this._closeButton = this._popup.querySelector('.popup__btn-close');

            this._closeButton.addEventListener('click', () => { this.closePopup() })
        }
    }

    _setPopupType() {
        if (this._popup.classList.contains('popup_type_message')) {
            return 'message';
        } else if (this._popup.classList.contains('popup_type_window')) {
            return 'window';
        } else {
            return 'unknown';
        }
    }
}
