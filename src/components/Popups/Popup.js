export class Popup {
    constructor(popup) {
        this._type = 'default';
        this._popup = popup;
        this._closeFunc = this.close;
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
        return this._type;
    }

    configurePopup(configuration) {
        this._closeFunc = configuration.closeFunc;
    }

    setEventListeners() {
        if (this._popup) {
            this._closeButton = this._popup.querySelector('.popup__btn-close');

            this._closeButton.addEventListener('click', () => { this.closePopup() })
            this._popup.addEventListener("mousedown", (evt) => {
                if (evt.target === evt.currentTarget) {
                    this.closePopup();
                }
            })
        }
    }
}
