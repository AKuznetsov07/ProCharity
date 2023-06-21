import { Popup } from './Popup';
import { FormPopup } from './FormPopup';
import { MessagePopup } from './MessagePopup';
import { ContextPopup } from './ContextPopup';

export class PopupFactory {
    constructor () {
    }

    createPopupForSelector(selector) {
        let node = document.querySelector('.popup');
        this.createPopupForNode(node);
    }

    createPopupForNode(node) {
        let popupClassList = node.classList;
        if (popupClassList.contains("popup_type_window")) {
            return new FormPopup(node);
        }
        else if (popupClassList.contains("popup_type_message")) {
            return new MessagePopup(node);
        }
        else if (popupClassList.contains("popup_type_menu")) {
            return new ContextPopup(node);
        }
        else {
            return new Popup(node);
        }
        return null;
    }

}