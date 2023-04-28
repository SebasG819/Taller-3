import styles from './index.css';

import dbsdata from "../services/dbs"
import psbdata from "../services/psb";
import trips from "../services/trips";
import sgfydata from "../services/sgfydata";
import unphdata from "../services/unphdata";




import bestsale, { attribute } from "../components/bestS/index";
import profileside, { Attribut } from "../components/Side-profile/index";
import PostCard, { Attribute1 } from "../components/PostCard/post";
import sugesforyou, { Attri } from "../components/sgfy/index";
import underph, {attr} from "../components/undercell/index";





class DashBoard extends HTMLElement {

    
    dbs:bestsale[]=[];
    psb:profileside[]=[];
    mypost :PostCard[]=[];
    sgfy:sugesforyou [] = [];
    unph:underph[]=[];

   

    constructor() {
        super();
        this.attachShadow({ mode: "open" });   

            dbsdata.forEach((person) => {
                const cards = this.ownerDocument.createElement(
                    "best-sale"
                    ) as bestsale;
                    cards.setAttribute(attribute.titulo, person.title);
                    cards.setAttribute(attribute.image, person.image);
                    this.dbs.push(cards);
                 });     

                 psbdata.forEach((person) => {
                    const pside = this.ownerDocument.createElement(
                        "profile-side"
                        ) as profileside;
                        pside.setAttribute(Attribut.name, person.name);
                        pside.setAttribute(Attribut.image, person.image);
                        pside.setAttribute(Attribut.description, person.description);
                        this.psb.push(pside);
                     });     
                     trips.forEach((user) => {
                        const postg = this.ownerDocument.createElement(
                            "post-card"
                            ) as PostCard;
                            postg.setAttribute(Attribute1.username, user.username);
                            postg.setAttribute(Attribute1.userimage, user.userimage);
                            postg.setAttribute(Attribute1.ptext, user.ptext);
                            postg.setAttribute(Attribute1.postimage, user.postimage);
                            postg.setAttribute(Attribute1.ptitle, user.ptitle);
                            this.mypost.push(postg);
                         });  


                         sgfydata.forEach((person) => {
                            const pside2 = this.ownerDocument.createElement(
                                "suge-you"
                                ) as sugesforyou;
                                pside2.setAttribute(Attri.name, person.name);
                                pside2.setAttribute(Attri.image, person.image);
                                pside2.setAttribute(Attri.description, person.description);
                                this.sgfy.push(pside2);
                             });     
                             
                             unphdata.forEach((person) => {
                                const under = this.ownerDocument.createElement(
                                    "under-phone"
                                    ) as underph;
                                    under.setAttribute(attr.image, person.image);
                                    this.unph.push(under);
                                 });       
        }

        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {

                const cards = this.ownerDocument.createElement("section")
                cards.className = `feat`
                const h1element = this.ownerDocument.createElement("h1")
                h1element.textContent = `GAMERS XP`
                cards.appendChild(h1element)
                this.dbs.forEach((featuredCards)   =>   {
                cards.appendChild(featuredCards)
                });
               

                const pside = this.ownerDocument.createElement("section")
                pside.className = `side`
                this.psb.forEach((Sidecards)   =>   {
                pside.appendChild(Sidecards)
                });


                const under = this.ownerDocument.createElement("section" ) 
                under.className = `under`
                this.unph.forEach((undercello) => {
                under.appendChild(undercello)
                });
                        
                const h3element = this.ownerDocument.createElement("h3")
                h3element.textContent = `Sugestions for you`
                pside.appendChild(h3element)    
                const h3elemen = this.ownerDocument.createElement("h3")
                h3elemen.className = `See`
                pside.appendChild(h3elemen)  
                
                const rightside = this.ownerDocument.createElement("section")
                rightside.appendChild(cards)

                this.sgfy.forEach((Sidecards)  => {pside.appendChild(Sidecards)
                });
                const GPost = this.ownerDocument.createElement("section")
                GPost.className = 'gpost'
                const main = this.ownerDocument.createElement("section")
                main.className = `main`
                const line = this.ownerDocument.createElement("div")
                line.className = 'line'

                main.appendChild(cards)
                main.appendChild(GPost)
                main.appendChild(pside)
                
                this.shadowRoot?.appendChild(main)
                
                this.mypost.forEach((user) => {
                    GPost.appendChild(user);
                });
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

            }
        }
    }
    
customElements.define("app-dashboard", DashBoard);