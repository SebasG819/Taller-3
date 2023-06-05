import styles from "./createpost.css"
import  { att } from "../../components/btnregis/buttonregis";
import "../../components/export"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";
import { postup } from "../../types/postup";
import firebase from "../../utils/firebase";

const formpostup : postup = {
    url: "",
    text: "",
}
export class createpost extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    async Userpostup (){firebase.savephPostDInDB(formpostup);}
  
    
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const containerg = this.ownerDocument.createElement("section")
                containerg.className = "big"

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"
                containerg.appendChild(container)

                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

                const tittle = this.ownerDocument.createElement("h2")
                tittle.innerText = "Crea una nueva publicación"
                container.appendChild(tittle)

                const subtittle = this.ownerDocument.createElement("h3")
                subtittle.innerText = "Pon el url de tu foto o video aquí"
                container.appendChild(subtittle)

                const url = this.ownerDocument.createElement("input")
                url.placeholder = "Pega el url"
                url.type = "url"
                url.addEventListener('change', (s: any) => {
                    console.log(s.target.value)
                    formpostup.url = s.target.value
                })
                this.shadowRoot?.appendChild (url);
                container.appendChild(url)

                const desc = this.ownerDocument.createElement("h3")
                desc.innerText = "Escribe la descripción de tu post"
                desc.addEventListener('change', (s: any) => {
                    console.log(s.target.value)
                    formpostup.text = s.target.value
                })
                container.appendChild(desc)

                const descs = this.ownerDocument.createElement("input")
                descs.placeholder = "Descripción de tu post"
                descs.type = "text"
                this.shadowRoot?.appendChild (descs);
                container.appendChild(descs)

                const button = this.ownerDocument.createElement("button");
                button.innerText = "Sube tu post"
                button.addEventListener("click",this.Userpostup)
                button.addEventListener("click", () =>{
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)
                
                this.shadowRoot?.appendChild(containerg)
        

            }
        }
    }
    
customElements.define("app-post", createpost);