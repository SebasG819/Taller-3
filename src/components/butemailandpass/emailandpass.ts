import styles from "./input.css"
import Firebase from "../../utils/firebase"

const Valuser = {
    email:"",
    password: "",
};
export enum attr {
    "placeholder" = "placeholder",
    "type" = "type",
}

  class emailandpass extends HTMLElement{
    placeholder?: string;
    type?: string;


static get observedAttributes() {
    const attr: Record<attr,null> ={

        placeholder: null,
        type: null,

    };
    return Object.keys(attr);
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
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }

    async Funfire(){
        Firebase.Userlogin(Valuser)
    }


    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

            const log = this.ownerDocument.createElement("input")
            log.placeholder = "Email"
            log.type = "Email"
            log.addEventListener(
                "change",
                (e: any) => (Valuser.email = e.target.value)
              );
            this.shadowRoot?.appendChild(log)

            const passw = this.ownerDocument.createElement("input")
            passw.placeholder = "Password"
            passw.type = "Password"
            passw.addEventListener(
                "change",
                (e: any) => (Valuser.password = e.target.value)
              );
            this.shadowRoot?.appendChild(passw)

            const button= this.ownerDocument.createElement("button");
            button.innerText = "Iniciar sesión"
            button.addEventListener("click", this.Funfire)    
            this.shadowRoot?.appendChild(button)


        }
    }

}


customElements.define("email-pass",emailandpass);
export default emailandpass;