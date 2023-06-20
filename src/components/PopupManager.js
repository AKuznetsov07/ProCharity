export class PopupManager {
    constructor () {
        this._popupCollection = new Map();
        this._activePopupId = '';
    }

    addPopup(id, popup) {
        this._popupCollection.set(id, popup);
    }

    open(id) {
        const popup = this._popupCollection.get(id);
        // Проверяем если попап уже открыт и он не типа message, то закрываем его
        if(this._activePopupId != '' && popup.getPopupType() != 'message') {
            this.closeActiveWindow();
        }

        popup.open();
        this._activePopupId = id;
    }

    // ---!!!---   В данный момент это не выполняется, потому что попап закрывается напрямую с экземпляра попапа
    close(id) {
        this._popupCollection.get(id).close();
        this._activePopupId = '';
    }

    closeActiveWindow() {
        this.close(this._activePopupId);
    }
}