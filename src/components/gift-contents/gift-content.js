import { LiraElement } from '/js/lira.js'

const GiftContentAttributes = [
    'type', // Required
    'showing', // Required

    // Attributes for GiftCard
    'code',
    'amount',
    'brand',
    'redeem-url',
    'redeem-instructions',
    'card-background-color',
    'card-text-color',
    'card-button-color',
    'card-button-text-color',
]

export class GiftContent extends LiraElement {
    constructor () {
        super(true, GiftContentAttributes)

        this.typeElementMapping = {
            'giftCard': 'gift-card',
        }
    }

    static get observedAttributes () {
        return GiftContentAttributes
    }

    attributeChangedCallback (attrName, oldValue, newValue) {
        if (attrName === 'showing' && oldValue !== newValue) {
            if (newValue === 'true') {
                this.showCard()
            }
        }
    }


    getGiftContentHtml () {
        if (!Object.keys(this.typeElementMapping).includes(this.type)) {
            return ''
        }

        const giftContentElement = this.typeElementMapping[this.type]

        let giftContentHtml = `<${giftContentElement}`
            for (const attribute of GiftContentAttributes) {
                if (attribute === 'type' || attribute === 'showing') {
                    continue
                }

                if (!!this[attribute]) {
                    giftContentHtml += ` ${attribute}="${this[attribute]}"`
                }
            }
            giftContentHtml += `></${giftContentElement}>`

            return giftContentHtml
    }

    showCard () {
        const content = this.shadowRoot.querySelector(this.typeElementMapping[this.type])
        content.setAttribute('showing', true)
    }

    render () {
        return `
            ${this.getGiftContentHtml()}
        `
    }
}

window.customElements.define('gift-content', GiftContent)