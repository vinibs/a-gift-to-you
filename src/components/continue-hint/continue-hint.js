import { LiraElement } from '/js/lira.js'

const ContinueHintAttributes = []

export class ContinueHint extends LiraElement {
    constructor () {
        super(true, ContinueHintAttributes)
        this.useStyle('./continue-hint.css')
    }

    static get observedAttributes () {
        return ContinueHintAttributes
    }

    render () {
        return `
            <footer class="subtitle">
                (<slot></slot>)
            </footer>
        `
    }
}

window.customElements.define('continue-hint', ContinueHint)