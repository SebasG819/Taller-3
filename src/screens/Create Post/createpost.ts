import styles from "./createpost.css"
import  { att } from "../../components/btnregis/buttonregis";
import "../../components/export"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";


export class createpost extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
        
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

                const img = this.ownerDocument.createElement("img")
                img.src="../../../src/pics/imgicon.png"
                img.className = "logo"
                container.appendChild(img)

                const subtittle = this.ownerDocument.createElement("h3")
                subtittle.innerText = "Arrastra las fotos o videos aquí"
                container.appendChild(subtittle)

                


                const button = this.ownerDocument.createElement("my-butpost");
                button.addEventListener("click", () =>{
                    button.className="btn-signup"
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)
                
                this.shadowRoot?.appendChild(containerg)
        

            }
        }
    }
    
customElements.define("app-post", createpost);