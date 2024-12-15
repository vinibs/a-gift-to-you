import { LiraElement } from '/js/lira.js'

const ContinueHintAttributes = [
    'transparent',
]

export class ContinueHint extends LiraElement {
    constructor () {
        super(true, ContinueHintAttributes)
        this.useStyle('./continue-hint.css')
    }

    static get observedAttributes () {
        return ContinueHintAttributes
    }

    attributeChangedCallback (attrName, oldValue, newValue) {
        const subtitle = this.shadowRoot.querySelector('footer.subtitle')
        if (attrName === 'transparent' && oldValue !== newValue) {
            if (newValue === 'true') {
                subtitle.classList.add('transparent')
            } else {
                subtitle.classList.remove('transparent')
            }
        }
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