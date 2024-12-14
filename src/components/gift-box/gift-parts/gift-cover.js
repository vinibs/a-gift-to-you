import { LiraElement } from '/js/lira.js'

const GiftCoverAttributes = [
    'box-color',
]

export class GiftCover extends LiraElement {
    constructor () {
        super(true, GiftCoverAttributes)
        this.useStyle('./gift-parts.css')

        this['box-color'] = this['box-color'] ?? '#dcdcdc'
    }

    static get observedAttributes () {
        return GiftCoverAttributes
    }

    render () {
        return `
            <svg version="1.1" viewBox="0 0 119.06 119.06" xmlns="http://www.w3.org/2000/svg">
                <path fill="${this['box-color']}" d="m59.527 5.0276 46.88 27.066 1e-5 14.816-46.88 27.437-46.88-27.437v-14.816z"/>
                <path d="m59.527 59.531 46.88-27.437 1e-5 14.816-46.88 27.437z" fill="#000000" fill-opacity=".2"/>
                <path d="m59.527 59.531-46.88-27.437-1e-5 14.816 46.88 27.437z" fill="#000000" fill-opacity=".08"/>
            </svg>
        `
    }
}

window.customElements.define('gift-cover', GiftCover)