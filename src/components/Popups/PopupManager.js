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
            if (popup.getPopupType() == 'message') {
                popup.open();
            }
            else {
                // Проверяем если попап уже открыт и он не типа message, то закрываем его
                if (this._activePopupId != '') {
                    this.closeActiveWindow();
                }
                popup.open();
                this._activePopupId = id;
            }
        }
    }
    
    close(id) {
        let popup = this._popupCollection.get(id)
        if (popup) {            
            popup.close();
            this._activePopupId = '';
        }
    }

    closeActiveWindow() {
        this.close(this._activePopupId);
    }
}