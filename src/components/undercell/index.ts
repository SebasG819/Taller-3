import styles from './under.css';

export enum attr {
    "image" = "image",
    

}

class underph extends HTMLElement {
    image?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<attr, null> = {
        
            image: null,
            
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
        propName: attr,
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
               <img src="${this.image}">
                </section>
                <div><div>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }
    
customElements.define("under-phone", underph);
export default underph;