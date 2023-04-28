import styles from './scard.css';

export enum Attribut {
    "image" = "image",
    "name" = "name",
    "description" = "description"

}

class profileside extends HTMLElement {
    image?: string;
    name?: string;
    description?: string
    
    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
        
            image: null,
            name: null,
            description: null
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
        propName: Attribut,
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
               <section class = "nameandsec">
                <h2>${this.name}</h2>
                <p class = "desc"> ${this.description}</p>
                </section>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                 this.shadowRoot?.appendChild(css);
                
            }
        }
    }
    
customElements.define("profile-side", profileside);
export default profileside;