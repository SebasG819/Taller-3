import styles from './ppost.css';

export enum Attribute2 {
    "username" = "username",
    "userimage" = "userimage",
    "postimage" = "postimage",
}


export default class profilepost extends HTMLElement{
    username?: string;
    userimage?: string;
    ptitle?: string;
    ptext?: string;
    postimage?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute2, null> = {
            username: null,
            userimage: null,
            postimage: null,
        };
        return Object.keys(attrs);
      }

    constructor(){
        super()
        this.attachShadow({ mode:"open"})
    }

    
    attributeChangedCallback(
        propName: Attribute2,
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
    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <div class="post-container">
        <div class="user-info">
          <img src="${this.userimage}" alt="user-profile">
          <h2>@${this.username}</h2>
        </div>
        <div class="post-image">
          <img src="${this.postimage}" alt="post-image">
        </div>
        </div>
        `;
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('profilepost-card', profilepost);