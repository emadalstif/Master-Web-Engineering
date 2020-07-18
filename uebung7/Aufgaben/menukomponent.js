import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';


class Menuver extends LitElement {


    static get styles() {
        return [css `
                    h1 {
                        margin-top: 0px;
                        text-align: center; 
                
                    }
            
                    #headerMenu{
                        display: flex;
                        background-color: green;
                        flex-direction: row;
                        
                        text-align: center;
                        
                    }
                    .btn{
                        background-color: gray;
                        color: black;
                        font-weight: bold;
                        border-radius: 10px;
                        border-width: 3px;
                        width: 100px;
                        margin: 10px;
                    }
                    @media (max-width: 600px) {
                         .header {
                        display: flex;
                        flex-flow: row wrap;
                        border: 1px solid red;
                            }
                    }

            
                `];

    }
    static get properties() {
        return {
            url: {
                type: String,
                reflect: true
            },

            currentTimeString: { type: String, reflect: true },
            isActive: { type: Boolean },
        };
    }


    constructor() {
        super();


    }


    render() {
        return html `
      <header>
            <div id="headerMenu">
            <h1> Her </h1>
                <button id="text" class="btn">${this.html || 'Html'}</button>
                <button id="text" class="btn">${this.css || 'Css'}</button>
                <button id="text" class="btn">${this.java || 'Javascript'}</button>
                <button id="text" class="btn">${this.other || 'Others'}</button>
            </div>
      </header>`;
    }

}
class Menuher extends Menuver {

    static get styles() {
        return [css `
                            h1 {
                                margin-top: 0px;
                                text-align: center; 

                            }
                            .btn {
                    
                                background-color: gray;
                                color: black;
                                font-weight: bold;
                                border-radius: 10px;
                                border-width: 3px;
                                width: 100px;
                                margin: 10px;
                        
                                display:block;
                        
                            }
                        .menü {
                                display:var( -- display ,flex);
                                flex-direction:var(--flex-direction, column);
                                height:var(--height ,auto);
                                background-color:var( --background-color,brown);
                                width: 100%;
                                text-align: center; 

                            }
                            h1 {
                                margin-top: 0px;
                                color: black;
                            }
        
        
                        }
              `];
    }
    static get properties() {
        return {

        }
    }


    constructor() {
        super();


    }



    render() {
        return html `
        <header>    
            <div class="menü">
                <h1> Ver </h1>
                    <button id="text" class="btn">Html</button>
                    <button id="text" class="btn">Css</button>
                    <button id="text" class="btn">Java</button>
                    <button id="text" class="btn">others</button>
            </div>
        </header> `;

    }


}
customElements.define("my-menuher", Menuher);
customElements.define("my-menuver", Menuver);