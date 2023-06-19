export class PopupManager {
    constructor () {
        this._popupCollection = new Map();
    }

    addPopup(id, {popupElement, popup}) {
        this._popupCollection.set(id, {popupElement, popup});
    }

    open(id) {       
        this._popupCollection.get(id).popup.open();
    }
    
    close(id) {
        this._popupCollection.get(id).popup.close();
    }
}