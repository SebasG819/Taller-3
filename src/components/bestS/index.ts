import styles from './card.css';

export enum attribute {
    "icon" = "icon",
    "titulo" = "titulo"

}

class bestsale extends HTMLElement {
    icon?: string;
    titulo?: string;
    
    static get observedAttributes() {
        const attrs: Record<attribute, null> = {
        
            icon: null,
            titulo: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
               <img src="${this.icon}">
                <h2><a href="#">${this.titulo}</a></h2>
                </section>
                <div><div>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }
    
customElements.define("best-sale", bestsale);
export default bestsale;