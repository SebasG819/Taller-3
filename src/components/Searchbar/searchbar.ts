import styles from './searchbar.css';

export default class AppSearchbar extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback (){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=` 
        <div class="search-container">
            <input type="text" placeholder="Search...">
        </div>`        
        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
    }
}
customElements.define("searchbar-card", AppSearchbar);