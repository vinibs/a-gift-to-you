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

        const giftElement = document.getElementById('gift')
        giftElement.addEventListener('click', this.openGift)
    }

    openGift (e) {
        e.preventDefault()
        const giftElement = this
        const isGiftOpen = giftElement.getAttribute('open') === 'true'

        if (!isGiftOpen) {
            giftElement.setAttribute('open', true)
        }
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