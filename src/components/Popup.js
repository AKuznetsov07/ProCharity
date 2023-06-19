export default class Popup {
  constructor(popup) {
    //this._selector = selector;
    //this._popup = document.querySelector(this._selector);
    this._popup = popup;
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    if (this._popup) {
      this._closeButton = this._popup.querySelector('.popup__btn-close');

      this._closeButton.addEventListener('click', () => {
        this.close()
      })
    }
  }
}
