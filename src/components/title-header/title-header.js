import { LiraElement } from '/js/lira.js'

const TitleHeaderAttributes = [
    'title-color'
]

export class TitleHeader extends LiraElement {
    constructor () {
        super(true, TitleHeaderAttributes)
        this.useStyle('./title-header.css')
    }

    static get observedAttributes () {
        return TitleHeaderAttributes
    }

    render () {
        return `
            <header>
                <div class="titles">
                    <span class="title" style="color: ${this['title-color']}">
                        <slot></slot>
                    </span>
                    <span class="subtitle">
                        <slot name="subtitle"></slot>
                    </span>
                </div>
            </header>
        `
    }
}

window.customElements.define('title-header', TitleHeader)