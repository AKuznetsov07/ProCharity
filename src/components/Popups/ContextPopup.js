import { Popup } from './Popup';
export class ContextPopup extends Popup {

    constructor(node) {
        super(node);
        this._type = 'context';
        this.setEventListeners(); 
    }

    configurePopup(configuration) {
        super.configurePopup(configuration);
        // действия кнопок контекста
        let nodeRect = this._popup.getBoundingClientRect();

        //TODO:fix autocount
        let nodeWidth = 222;//nodeRect.width
        let nodeHeight = 141;//nodeRect.height

        if (configuration.x + nodeWidth > window.innerWidth/*$(window).width() + $(window).scrollLeft()*/) {
            this._popup.style.left = `${configuration.x - nodeWidth}px`;
        } else {
            this._popup.style.left = `${configuration.x}px`;
        }

        if (configuration.y + nodeHeight > window.innerHeight/*$(window).height() + $(window).scrollTop()*/) {
            this._popup.style.top = `${configuration.y - nodeHeight}px`;
        } else {
            this._popup.style.top = `${configuration.y}px`;
        }
    }
    setEventListeners() {
        if (this._popup) {///TODO:
            //this._popup.addEventListener("mousedown", (evt) => {
            //    if (evt.target === evt.currentTarget) {
            //        this.closePopup();
            //    }
            //})
        }
    }
}