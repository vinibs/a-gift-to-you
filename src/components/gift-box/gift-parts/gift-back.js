import { LiraElement } from '/js/lira.js'

const GiftBackAttributes = [
    'box-color',
]

export class GiftBack extends LiraElement {
    constructor () {
        super(true, GiftBackAttributes)
        this.useStyle('./gift-parts.css')

        this['box-color'] = this['box-color'] ?? '#dcdcdc'
    }

    static get observedAttributes () {
        return GiftBackAttributes
    }

    render () {
        return `
            <svg version="1.1" viewBox="0 0 119.06 119.06" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="${this['box-color']}" transform="matrix(1.0317 0 0 1.0317 207.13 37.472)" d="m-98.673 47.096-44.451 25.59-44.387-25.701 0.0642-51.29 44.451-25.59 44.387 25.701z"/>
                    <path d="m13.671 85.947 45.91-26.43v-52.917l-45.844 26.43z" fill="#000000" fill-opacity=".08"/>
                    <path d="m13.671 85.947 45.794 26.516 45.86-26.401-45.744-26.544z" fill="#000000" fill-opacity=".2"/>
                </g>
            </svg>
        `
    }
}

window.customElements.define('gift-back', GiftBack)