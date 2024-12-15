import { LiraElement } from '/js/lira.js'

const GiftCardAttributes = [
    'code',
    'amount',
    'brand',
    'redeem-url',
    'redeem-instructions',
    'card-background-color',
    'card-text-color',
    'card-button-color',
    'card-button-text-color',
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
                <div class="card-header">
                    <span>Gift Card ${this['brand']}</span>
                    <span class="help" style="border-color: ${this['card-text-color']}">
                        <span class="help-text">${this['redeem-instructions']}</span>
                    </span>
                </div>
                <div class="card-body">
                    <div class="card-amount">
                        Valor: <strong>${this['amount']}</strong>
                    </div>
                    <div class="code-info">
                        Seu código:
                        <input
                            readonly
                            type="text"
                            value="${this['code']}"
                            style="color: ${this['card-text-color']}; border-color: ${this['card-text-color']}">
                    </div>
                </div>
                <div class="card-footer">
                    <a
                        href="${this['redeem-url']}"
                        target="_blank"
                        style="background-color: ${this['card-button-color']}; color: ${this['card-button-text-color']}"
                        onclick="window.open('${this['redeem-url']}', '_blank'); return false;">
                        Resgatar código
                    </a>
                </div>
            </div>
        `
    }
}

window.customElements.define('gift-card', GiftCard)