import styles from './profile.css';

export enum Attribute3 {
    "image" = "image",
    "name" = "name",
    "gameprofile" = "gameprofile",
    "description" = "description"

}

export default class profileApp extends HTMLElement {
    image?: string;
    name?: string;
    gameprofile?: string
    description?: string
    
    static get observedAttributes() {
        const attrs: Record<Attribute3, null> = {
        
            image: null,
            name: null,
            gameprofile: null,
            description: null,
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
        propName: Attribute3,
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
                <div class="user-info">
                <img src="${this.image}">
                <div class="name-and-game">
                <h2>${this.name}</h2>
                <p class="game-profile">${this.gameprofile}</p>
                </div>
                </div>
                <p class="description">${this.description}</p>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                 this.shadowRoot?.appendChild(css);
                
            }
        }
    }
    
customElements.define("profile-card", profileApp);
