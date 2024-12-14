import { LiraElement } from '/js/lira.js'
import './gift-parts/gift-back.js'
import './gift-parts/gift-front.js'
import './gift-parts/gift-front-ribbon.js'
import './gift-parts/gift-cover.js'
import './gift-parts/gift-cover-ribbon.js'
import '../glowing-ball/glowing-ball.js'

const GiftBoxAttributes = [
    'box-color',
    'ribbon-color',
]

export class GiftBox extends LiraElement {
    constructor () {
        super(true, GiftBoxAttributes)
        this.useStyle('./gift-box.css')

        this['box-color'] = this['box-color'] ?? '#dcdcdc'
        this['ribbon-color'] = this['ribbon-color'] ?? '#234b92'
    }

    static get observedAttributes () {
        return GiftBoxAttributes
    }

    render () {
        return `
        <div class="gift-box">
            <gift-back box-color="${this['box-color']}"></gift-back>
                <glowing-ball></glowing-ball>
                <gift-front box-color="${this['box-color']}"></gift-front>
                <gift-front-ribbon ribbon-color="${this['ribbon-color']}"></gift-front-ribbon>
                <gift-cover box-color="${this['box-color']}"></gift-cover>
                <gift-cover-ribbon ribbon-color="${this['ribbon-color']}"></gift-cover-ribbon>
            </div>
        `
    }
}

window.customElements.define('gift-box', GiftBox)