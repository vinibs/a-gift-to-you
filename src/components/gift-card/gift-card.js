import { LiraElement } from '/js/lira.js'

const GiftCardAttributes = [
    'showing',
    'shown',
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
        const card = this.shadowRoot.querySelector('.card')
        card.classList.add('showing')
        this.prepareToContinue(card)
    }

    prepareToContinue (card) {
        const timeToWait = 4 * 1000;
        setTimeout(() => {
            card.classList.add('pointer')
            document.addEventListener('click', this.hideCard.bind(this))
        }, timeToWait)
    }

    hideCard (e) {
        e.preventDefault()

        this.removeAttribute('showing')
        this.setAttribute('shown', true)
        const card = this.shadowRoot.querySelector('.card')
        card.classList.remove('showing')
        card.classList.add('shown')

        this.hideGiftBox()
    }

    render () {
        return `
            <div class="card">
                <slot></slot>
            </div>
        `
    }
}

window.customElements.define('gift-card', GiftCard)