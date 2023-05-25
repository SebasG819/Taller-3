import styles from "./butpost.css"

 class butpost extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =  "";

            const edit = this.ownerDocument.createElement("style");
                edit.innerHTML = styles
                this.shadowRoot?.appendChild(edit);
            

            const button= this.ownerDocument.createElement("button");
            button.innerText = "Sube desde tu equipo"

            this.shadowRoot?.appendChild(button)
        }
    }
}

customElements.define("my-butlogin",butpost);
export default butpost;