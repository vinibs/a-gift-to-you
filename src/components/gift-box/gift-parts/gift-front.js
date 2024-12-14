import { LiraElement } from '/js/lira.js'

const GiftFrontAttributes = [
    'box-color',
]

export class GiftFront extends LiraElement {
    constructor () {
        super(true, GiftFrontAttributes)
        this.useStyle('./gift-parts.css')

        this['box-color'] = this['box-color'] ?? '#dcdcdc'
    }

    static get observedAttributes () {
        return GiftFrontAttributes
    }

    render () {
        return `
            <svg version="1.1" viewBox="0 0 119.06 119.06" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(240.42 -6.5394)">
                    <path d="m-226.72 39.612v52.917l45.827 26.458 45.827-26.458v-52.917l-45.827 26.458z" fill="${this['box-color']}"/>
                    <path d="m-135.06 39.612-45.827 26.458v52.917l45.827-26.458z" fill="#1a1a1a" fill-opacity=".08"/>
                </g>
            </svg>
        `
    }
}

window.customElements.define('gift-front', GiftFront)