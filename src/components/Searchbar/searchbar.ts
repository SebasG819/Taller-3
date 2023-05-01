import styles from './searchbar.css';

export default class searchbar extends HTMLElement{
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
        <section>
            <input type="Search...">
        </section>`        
        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
    }
}
customElements.define("searchbar-card", searchbar);