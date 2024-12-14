import { LiraElement } from '/js/lira.js'

const GlowingBallAttributes = []

export class GlowingBall extends LiraElement {
    constructor () {
        super(true, GlowingBallAttributes)
        this.useStyle('./glowing-ball.css')
    }

    static get observedAttributes () {
        return GlowingBallAttributes
    }

    render () {
        return `
            <div class="glowing-ball">
                <div class="glow-area">
                    <div class="flashes"></div>
                    <div class="glow"></div>
                </div>
            </div>
        `
    }
}

window.customElements.define('glowing-ball', GlowingBall)