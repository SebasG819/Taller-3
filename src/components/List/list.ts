import { appState, dispatch } from "../../store";
//import { navigate } from "../../store/actions";
//import { Screens } from "../../types/navigation";

export default class PostList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        appState.postup.forEach((s)=>{


             const onepost = this.ownerDocument.createElement('section');


             const imgpost = this.ownerDocument.createElement('img');
             imgpost.src = s.url

             const descpost = this.ownerDocument.createElement('p');
             descpost.textContent = s.text

        

            
             this.shadowRoot?.appendChild(onepost);
        })
    }
}

customElements.define('recipe-list', PostList)