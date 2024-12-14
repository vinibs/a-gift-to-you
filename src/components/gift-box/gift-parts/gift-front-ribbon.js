import { LiraElement } from '/js/lira.js'

const GiftFrontRibbonAttributes = [
    'ribbon-color',
]

export class GiftFrontRibbon extends LiraElement {
    constructor () {
        super(true, GiftFrontRibbonAttributes)
        this.useStyle('./gift-parts.css')

        this['ribbon-color'] = this['box-color'] ?? '#234b92'
    }

    static get observedAttributes () {
        return GiftFrontRibbonAttributes
    }

    render () {
        return `
            <svg version="1.1" viewBox="0 0 119.06 119.06" xmlns="http://www.w3.org/2000/svg">
                <path fill="${this['ribbon-color']}" d="m33.461 44.453v52.916l6.3189 3.6984v-52.916l-6.3189-3.6984zm52.145 0-6.3189 3.6979v52.916l6.3189-3.6984v-52.916z" stroke-width=".8"/>
            </svg>
        `
    }
}

window.customElements.define('gift-front-ribbon', GiftFrontRibbon)