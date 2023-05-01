import "./components/export"
import "./screens/dashboard"
import "./screens/findplayer"
import "./screens/searchbar"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        //const dashboard = this.ownerDocument.createElement('app-dashboard');
        //this.shadowRoot?.appendChild(dashboard);

        //const findplayer = this.ownerDocument.createElement('app-findplayer');
        //this.shadowRoot?.appendChild(findplayer);

        const searchbar = this.ownerDocument.createElement('app-sbscreen');
        this.shadowRoot?.appendChild(searchbar);
    }
}

customElements.define('app-container', AppContainer)