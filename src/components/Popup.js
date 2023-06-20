export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._popupType = this._setPopupType();
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  getPopupId() {
    return this._popup.getAttribute('id');
  }

  getPopupType() {
    return this._popupType;
  }

  setEventListeners() {
    if (this._popup) {
      this._closeButton = this._popup.querySelector('.popup__btn-close');

      this._closeButton.addEventListener('click', () => {
        this.close()
      })
    }
  }

  _setPopupType() {
    if(this._popup.classList.contains('popup_type_message')) {
      return 'message'
    } else if (this._popup.classList.contains('popup_type_window')) {
      return 'window'
    } else {
      return 'unknown'
    }

  }
}
