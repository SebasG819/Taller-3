import styles from "./createpost.css"
import "../../components/export"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";


export default class postpage extends HTMLElement {
    
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

                const titulo = this.ownerDocument.createElement("h3")
                titulo.innerText = "Escribe el título del Post"
                container.appendChild(titulo)

                const titulos = this.ownerDocument.createElement("input")
                titulos.placeholder = "Escribe el título del Post"
                titulos.type = "text"
                this.shadowRoot?.appendChild (titulos);
                container.appendChild(titulos)
                
                const desc = this.ownerDocument.createElement("h3")
                desc.innerText = "Escribe la descripción de tu post"
                container.appendChild(desc)

                const descs = this.ownerDocument.createElement("input")
                descs.placeholder = "Descripción de tu post"
                descs.type = "text"
                this.shadowRoot?.appendChild (descs);
                container.appendChild(descs)

                const subtittle = this.ownerDocument.createElement("h3")
                subtittle.innerText = "Pon el url de tu foto o video aquí"
                container.appendChild(subtittle)

                const url = this.ownerDocument.createElement("input")
                url.placeholder = "Pega el url"
                url.type = "url"
                this.shadowRoot?.appendChild (url);
                container.appendChild(url)


                const button = this.ownerDocument.createElement("button");
                button.innerText = "Sube tu post"
                button.addEventListener("click", () =>{
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)
                
                this.shadowRoot?.appendChild(containerg)
            }
        }
    }
    
customElements.define("app-post", postpage);