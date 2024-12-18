/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { giftData } from "../../contents/data.js"
import { LiraElement } from '/js/lira.js'


// Defines the custom element's class
class Home extends LiraElement {

    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()

        const giftElement = this.querySelector('#gift')
        giftElement.addEventListener('click', this.openGift.bind(this))
    }

    openGift (e) {
        e.preventDefault()
        const giftElement = this.querySelector('#gift')
        const isGiftOpen = giftElement.getAttribute('open') === 'true'

        if (!isGiftOpen) {
            const continueHint = this.hideContinueHint()
            const hiddenTime = 4 * 1000;
            setTimeout(() => continueHint.removeAttribute('transparent'), hiddenTime)

            giftElement.setAttribute('open', true)
            giftElement.hideContinueHint = this.hideContinueHint.bind(this)
        }
    }

    hideContinueHint () {
        const continueHint = document.querySelector('#continue-to-open')
        continueHint.setAttribute('transparent', true)
        return continueHint
    }

    getGiftContentHtml () {
        if (!giftData || !giftData.content) {
            return ''
        }

        let giftContentHtml = `<gift-content slot="gift-content" type="${giftData.content.type}"`
        for (const key in giftData.content) {
            if (key === 'type') {
                continue
            }

            giftContentHtml += ` ${key}="${giftData.content[key]}"`
        }
        giftContentHtml += `></gift-content>`

        return giftContentHtml
    }

    // Defines the component default inner HTML
    render () {
        return `
            <title-header title-color="${giftData.titleColor}">
                <h1>${giftData.title}</h1>
                <h2 slot="subtitle">${giftData.subtitle}</h2>
            </title-header>
            <main>
                <div class="content">
                    <gift-box
                            id="gift"
                            box-color="${giftData.boxColor}"
                            ribbon-color="${giftData.ribbonColor}">
                        <text-card slot="card">${giftData.cardText}</text-card>
                        ${this.getGiftContentHtml()}
                    </gift-box>

                    <continue-hint id="continue-to-open">
                        Clique ou toque para continuar
                    </continue-hint>
                </div>
            </main>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('app-index', Home)