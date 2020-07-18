import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';

class myStoppuhr extends LitElement {
    static properties() {
        return {
            aktuellzeit: { type: Number, reflect: true },
            aktuellzeitString: { type: String, reflect: true },
            active: { type: Boolean },

        };
    }

    constructor() {
        super();
        this.aktuellzeit = 0;

        var zeitstring = () => {
            var uhr = Math.round(this.aktuellzeit / (60 * 60 * 1)); //Uhr
            var uhrstring = "" + uhr;
            if (uhr < 1)
                uhrstring = "0" + uhr;

            var min = Math.round(this.aktuellzeit / (60 * 1)) % 60; //Min
            var minstring = "" + min;
            if (min < 1)
                minstring = "0" + min;

            var sec = (this.aktuellzeit / 1) % 60; //Sec
            var secstring = "" + sec;
            if (sec < 1)
                secstring = "0" + sec;
            var result = `${uhrstring}:${minstring}:${secstring}`;
            return result;
        }

        this.aktuellzeitString = zeitstring(this.aktuellzeit);
        this.active = false;

        var update = () => {
            if (this.active)
                this.aktuellzeit++;
            this.aktuellzeitString = zeitstring(this.aktuellzeit);
            this.setAttribute('aktuellzeitString', zeitstring(this.aktuellzeit));
            console.log("interval " + this.active + " " + this.aktuellzeitString);
            super.update();
        }

        setInterval(function() {
            update()
        }, 1000);
    }

    render() {
        return html `
             <h1> the time </h1><br>
            <label>[${this.aktuellzeitString}]</label><br><br>
            <button id="start" class="button" @click="${this.start}">Start</button>
            <button id="stop"  class="button" @click="${this.stop}">Stop</button>
            <button id="resume" class="button" @click="${this.resume}">Resume</button>
            <table></table>
            `;
    }

    start() {
        console.log("start" + this.active);
        if (this.aktuellzeit === 0)
            this.active = true;
    }
    stop() {
        console.log("stop" + this.active);
        this.active = false;
    }
    resume() {
        console.log("resume" + this.active);
        if (this.aktuellzeit != 0)
            this.active = true;
    }


}
customElements.define('my-stoppuhr', myStoppuhr)