import "./components/export"
import "./screens/dashboard"
import "./screens/findplayer"
import "./screens/searchbar"
import "./screens/profilescreen"
import { addObserver, appState } from "./store/index"
import { Screens } from "./types/navigations"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if(this.shadowRoot)this.shadowRoot.innerHTML='';
        switch (appState.screen) {
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break;

                case Screens.FINDPLAYER:
                const findplayer = this.ownerDocument.createElement('app-findplayer');
                this.shadowRoot?.appendChild(findplayer);

                break;
            
                 case Screens.SEARCHBAR:
                const searchbar = this.ownerDocument.createElement('app-sbscreen');
                this.shadowRoot?.appendChild(searchbar);

                break;

                 case Screens.PROFILESCREEN:
                const profile = this.ownerDocument.createElement('app-profile');
                this.shadowRoot?.appendChild(profile);

                break;
        
            default:
                break;
        }
    

        
       
       
    }
}

customElements.define('app-container', AppContainer)