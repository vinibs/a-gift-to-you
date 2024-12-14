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
    }

    // Defines the component default inner HTML
    render () {
        return `
            <title-header title-color="${giftData.titleColor}">
                <h1>Title</h1>
                <h2 slot="subtitle">Subtitle</h2>
            </title-header>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('app-index', Home)