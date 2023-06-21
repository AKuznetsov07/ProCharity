import { PopupFactory} from './PopupFactory';
export class PopupManager {
    constructor () {
        this._popupCollection = new Map();
        this._activePopupId = '';
        this._factory = new PopupFactory();
        this.initializeManager();
    }

    initializeManager() {
        // Находим все попапы на странице
        const popupNodes = document.querySelectorAll('.popup');

        popupNodes.forEach((popupNode) => {
            let popup = this._factory.createPopupForNode(popupNode);
            let popupId = popup.getPopupId();

            let closeConfiguration = {
                closeFunc: ()=> this.close(popupId)
            };

            popup.configurePopup(closeConfiguration)
            // Добавляем попап в коллекцию в менеджер
            this.addPopup(popupId, popup);
        })
    }

    configurePopupById(id, configuration) {
        let popup = this._popupCollection.get(id);

        if (popup)
            popup.configurePopup(configuration);
    }

    addPopup(id, popup) {
        this._popupCollection.set(id, popup);
    }

    open(id) {
        const popup = this._popupCollection.get(id);
        if (popup) {
            console.log('id: ' + id);
            // Проверяем если попап уже открыт и он не типа message, то закрываем его
            if (this._activePopupId != '' && popup.getPopupType() != 'message') {
                this.closeActiveWindow();
            }
            console.log('open');
            popup.open();
            this._activePopupId = id;
        }
    }

    // ---!!!---   В данный момент это не выполняется, потому что попап закрывается напрямую с экземпляра попапа
    close(id) {
        let popup = this._popupCollection.get(id)
        if (popup) {
            console.log('close');
            popup.close();
            this._activePopupId = '';
        }
    }

    closeActiveWindow() {
        this.close(this._activePopupId);
    }
}