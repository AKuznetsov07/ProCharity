import { Popup } from './Popup';
export class ContextPopup extends Popup {

    constructor(node) {
        super(node);
        this._type = 'context';
        //this.setEventListeners();
        this._bindObject = null;
    }

    configurePopup(configuration) {
        super.configurePopup(configuration);
        // context button funcs also here
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

    setEventListeners(evt) {                  
            if (evt.target.parentNode.parentNode.classList.contains('employees__menu') === false) {             
             const page = document.querySelector('.page');             
             page.removeEventListener("mousedown", this._bindObject);
             this.closePopup();             
            }
    }
    
    open() {
        super.open();
        
        this._bindObject = this.setEventListeners.bind(this);

        const page = document.querySelector('.page');
        page.addEventListener("mousedown", this._bindObject)
    }
}