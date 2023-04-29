import styles from './post.css';

export enum Attribute1 {
    "username" = "username",
    "userimage" = "userimage",
    "ptitle" = "ptitle",
    "ptext" = "ptext",
    "postimage" = "postimage",
}


export default class PostCard extends HTMLElement{
    username?: string;
    userimage?: string;
    ptitle?: string;
    ptext?: string;
    postimage?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute1, null> = {
            username: null,
            userimage: null,
            ptitle: null,
            ptext: null,
            postimage: null,
        };
        return Object.keys(attrs);
      }

    constructor(){
        super()
        this.attachShadow({ mode:"open"})
    }

    
    attributeChangedCallback(
        propName: Attribute1,
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
    connectedCallBack(){
        this.render();
    }

    render(){
        if(this.shadowRoot)this.shadowRoot.innerHTML = `
        <head>
        <title>${this.ptitle}</title>
        </head>
        <body>
         <div class="post-container">
      <div class="user-info">
        <img src="${this.userimage}" alt="Foto de usuario">
        <div class="user-text">
          <h2>${this.username}</h2>
          <p>${this.ptext}</p>
        </div>
      </div>
      
      <img class="post-image" src="${this.postimage}" alt="Imagen de post">
      <div class="post-buttons">
        <button>Me gusta</button>
        <button>Comentar</button>
        <button>Compartir</button>
      </div>
    </div>
        `;
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('post-card', PostCard);