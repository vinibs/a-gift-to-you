import { LiraElement } from '/js/lira.js'

const GiftCardAttributes = [
    'code',
    'brand',
    'redeem-url',
    'redeem-instructions',
    'card-background-color',
    'card-text-color',
    'showing', // All gift contents should have this attribute
]

export class GiftCard extends LiraElement {
    constructor () {
        super(true, GiftCardAttributes)
        this.useStyle('./gift-card.css')
    }

    static get observedAttributes () {
        return GiftCardAttributes
    }

    attributeChangedCallback (attrName, oldValue, newValue) {
        if (attrName === 'showing' && oldValue !== newValue) {
            if (newValue === 'true') {
                this.showCard()
            }
        }
    }

    showCard () {
        const card = this.shadowRoot.querySelector('.gift-card')
        card.classList.add('showing')
    }

    render () {
        return `
            <div class="gift-card" style="background-color: ${this['card-background-color']}; color: ${this['card-text-color']}">
                <slot></slot>
            </div>
        `
    }
}

window.customElements.define('gift-card', GiftCard)