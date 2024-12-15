import { LiraElement } from '/js/lira.js'
import './gift-parts/gift-back.js'
import './gift-parts/gift-front.js'
import './gift-parts/gift-front-ribbon.js'
import './gift-parts/gift-cover.js'
import './gift-parts/gift-cover-ribbon.js'
import '../glowing-ball/glowing-ball.js'
import '../text-card/text-card.js'

const GiftBoxAttributes = [
    'box-color',
    'ribbon-color',
    'open',
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

    attributeChangedCallback (attrName, oldValue, newValue) {
        if (attrName === 'open' && oldValue !== newValue && newValue === 'true') {
            this.startOpening()
        }
    }

    startOpening() {
        const giftBox = this.shadowRoot.querySelector('.gift-box')
        giftBox.classList.add('open')

        const card = this.querySelector('text-card')
        card.setAttribute('showing', true)
        card.hideGiftBox = this.hideBox.bind(this)
    }

    hideBox () {
        const giftBox = this.shadowRoot.querySelector('.gift-box')
        giftBox.classList.add('hidden')

        this.hideContinueHint(true)
        this.showGiftContent()
        this.fadeGlowingBall()
    }

    showGiftContent () {
        const giftContent = this.querySelector('gift-content')
        giftContent.setAttribute('showing', true)
    }

    fadeGlowingBall () {
        const glowingBall = this.shadowRoot.querySelector('glowing-ball')
        glowingBall.classList.add('fade')
    }

    render () {
        return `
            <div class="gift-box">
                <gift-back box-color="${this['box-color']}"></gift-back>
                <glowing-ball></glowing-ball>
                <slot name="card" id="card"></slot>
                <slot name="gift-content"></slot>
                <gift-front box-color="${this['box-color']}"></gift-front>
                <gift-front-ribbon ribbon-color="${this['ribbon-color']}"></gift-front-ribbon>
                <gift-cover box-color="${this['box-color']}"></gift-cover>
                <gift-cover-ribbon ribbon-color="${this['ribbon-color']}"></gift-cover-ribbon>
            </div>
        `
    }
}

window.customElements.define('gift-box', GiftBox)