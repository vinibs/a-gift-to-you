import { LiraElement } from '/js/lira.js'

const GiftCoverRibbonAttributes = [
    'ribbon-color',
]

export class GiftCoverRibbon extends LiraElement {
    constructor () {
        super(true, GiftCoverRibbonAttributes)
        this.useStyle('./gift-parts.css')

        this['ribbon-color'] = this['ribbon-color'] ?? '#234b92'
    }

    static get observedAttributes () {
        return GiftCoverRibbonAttributes
    }

    render () {
        return `
            <svg width="450" height="450" version="1.1" viewBox="0 0 119.06 119.06" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient id="linearGradient52" x1="-48.876" x2="-48.794" y1="6.4503" y2="14.376" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity=".5" offset="0"/>
                        <stop stop-opacity=".75" offset="1"/>
                    </linearGradient>
                </defs>
                <g>
                    <g transform="translate(108.41 21.944)">
                        <path fill="${this['ribbon-color']}" d="m-70.068-6.1366c-2.5007 0.023388-3.6004 0.71753-4.2819 2.9512-1.9032 1.3535-1.7901 4.4435-0.60306 5.794 0.06094 0.11653 0.12985 0.23423 0.21601 0.3545 1.1076 1.5462 3.4902 4.6227 7.214 6.6647 1.7788 0.97546 5.4603 1.988 8.8243 2.7823l-16.778 9.6092v14.817l6.319 3.6985v-14.817l-0.06098-0.03566 3.8561-2.2593c0.42238 4.5749 1.7456 10.117 1.7456 10.117l2.5063-3.6313 5.1547 4.6214s-3.19-11.299-2.6577-14.331c0.05384-0.3067 0.14228-0.59902 0.25476-0.88005l7.6688-4.4927 1.896-0.44958 1.6387 0.46354c0.01725 0 0.03408-0.0019 0.05116-0.0026l18.539 10.862-0.03049 0.01809v14.817l6.3195-3.6985v-14.817l-0.03101 0.01809-6.5975-3.7786c4.4194 0.39996 9.3695 1.373 9.3695 1.373l-3.4975-4.0302 5.4472-2.42s-10.799-1.7041-14.163-1.1131c-0.97772 0.1718-2.1255 0.16404-3.3455 0.03876 1.6263-0.37794 3.055-0.8184 3.976-1.3234 3.7238-2.042 6.107-5.1185 7.2145-6.6647 0.08628-0.12046 0.15501-0.23832 0.21601-0.35502 0.97037-1.1043 1.2184-3.3666 0.2372-4.8974l0.9493-0.55604-2.1244-1.2263c-0.65883-1.4332-1.6799-1.9719-3.5528-2.0516l-0.08992-0.051676-0.0801 0.045992c-0.88027-0.024174-1.9363 0.040823-3.2287 0.1602-2.536 0.23423-6.9094 4.1132-10.426 7.66l-6.0384 3.4582-0.83561 0.14469-0.93276-0.16381-5.4405-3.1161c-3.6705-3.8669-8.9315-8.8727-11.815-9.139-1.1814-0.10911-2.1704-0.17574-3.004-0.16795zm39.771 9.0155c-1.206 1.1281-2.3755 2.375-3.2623 3.1006-0.88995 0.72815-3.4797 1.6689-6.1454 2.5068 0.22837-0.16698 0.45906-0.33345 0.68936-0.50023zm-36.293 0.54157 5.3986 3.1631c-1.7641-0.6187-3.2563-1.2431-3.8881-1.7601-0.4408-0.36066-0.96044-0.86316-1.5105-1.403z"/>
                        <path d="m-51.717 14.384c-1.1237 0.35442-6.2551 2.1616-6.8962 5.8141-0.47759 2.7209 1.9337 11.69 2.4562 13.587l0.85731 0.8201s-2.8223-11.396-2.1921-14.41c0.59948-2.8665 3.9714-4.7544 5.9247-5.6255-0.05533-0.05608-0.10502-0.11815-0.14986-0.18552zm-9.3932 15.524-1.9404 2.8112c0.07578 0.39514 0.12661 0.64802 0.12661 0.64802l2.2603-3.0587z" fill-opacity=".15"/>
                        <path d="m-75.477 22.019v14.817l6.3191 3.6982 1e-5 -14.817z" fill-opacity=".08"/>
                        <path d="m-22.276 22.019v14.817l-6.3191 3.6982-1e-5 -14.817z" fill-opacity=".2"/>
                        <path d="m-48.142 13.046s11.237 6.2448 15.4 6.1107c4.6571-0.14994 13.207 1.5338 13.207 1.5338l-1.094-1.2609c-2.2974-0.41999-8.36-1.452-12.113-1.3312-4.1629 0.13403-15.4-5.0524-15.4-5.0524zm28.767 0.93069-3.6577 1.6247 0.66301 0.76378 4.7842-2.1249s-0.69979-0.10981-1.7896-0.26355z" fill-opacity=".15"/>
                        <path d="m-71.954 1.1069c-2.0407-0.032309-3.5929 0.39885-2.6815 1.8056-0.11396-0.086656-0.21841-0.19173-0.31781-0.30489 0.06105 0.11686 0.13011 0.2349 0.21652 0.35553 1.1076 1.5462 3.4908 4.6227 7.2145 6.6647 3.6234 1.987 14.971 4.1022 15.59 4.2168-0.0115-0.07235-0.01839-0.14517-0.01705-0.21808 0.0061-0.3337 0.01111-0.65346 0.01654-0.97875-0.30124-0.23798-3.3985-2.6825-7.0022-5.3175-2.6657-0.83789-5.2554-1.7792-6.1454-2.5073-0.9541-0.78063-2.2347-2.1632-3.5367-3.3533-1.0566-0.19938-2.2629-0.34576-3.3373-0.36277z" fill-opacity=".4"/>
                        <path d="m-70.068-6.1366c-2.5007 0.023388-3.5999 0.71753-4.2814 2.9512-2.0623 1.4666-1.7606 4.9768-0.28629 6.0978-1.4582-2.2508 3.3913-2.0048 6.4554-1.3575 2.9903 0.63166 15.631 10.605 16.248 11.092 0.03279-1.9649 0.05295-3.7771 0.04857-5.2979-4.24e-4 -0.14259 0.02576-0.27827 0.07131-0.40514-2.3433-2.691-11.171-12.536-15.251-12.913-1.1814-0.10911-2.1709-0.17574-3.0045-0.16795z" fill-opacity=".2"/>
                        <path d="m-26.686 2.2629c-1.0744 0.017011-2.2806 0.16388-3.3373 0.36329-1.302 1.1901-2.5827 2.5722-3.5367 3.3528-0.88996 0.72816-3.4797 1.6694-6.1454 2.5073-2.6595 1.9446-5.029 3.7748-6.2193 4.7036l-0.0046 0.43666c-4.02e-4 0.03851-0.0034 0.07612-0.0072 0.11369 2.7229-0.26174 11.676-1.2326 14.819-2.9564 3.7238-2.042 6.1065-5.1185 7.214-6.6647 0.08641-0.12063 0.15547-0.23867 0.21652-0.35553-0.09938 0.11314-0.20335 0.21825-0.31729 0.30489 0.91139-1.4067-0.64132-1.8379-2.682-1.8056z" fill-opacity=".4"/>
                        <path d="m-28.572-4.9806c-0.83357-0.0078-1.8226 0.058834-3.004 0.16795-3.6725 0.3392-11.156 8.2643-14.336 11.808 0.03164 0.11492 0.04827 0.23422 0.04703 0.3545l-0.05994 5.8446c2.456-1.9243 12.755-9.9101 15.465-10.483 3.0641-0.64727 7.9136-0.89376 6.4554 1.357 1.4743-1.1211 1.776-4.6312-0.28629-6.0978-0.6815-2.2337-1.7812-2.9279-4.2819-2.9512z" fill-opacity=".2"/>
                        <path d="m-50.658 6.1364 1.7826 0.31377 1.8109-0.31377c0.66227-0.11474 1.2076 0.54107 1.2007 1.2132l-0.0649 6.2767c-7e-3 0.67209-0.55364 1.2132-1.2258 1.2132l-1.639-0.4631-1.9545 0.4631c-0.65402 0.15496-1.213-0.54115-1.2007-1.2132 0.0432-2.3496 0.07-4.504 0.0649-6.2767-2e-3 -0.67213 0.55364-1.2132 1.2258-1.2132z" fill="url(#linearGradient52)" fill-opacity=".45"/>
                        <path d="m-58.114 12.547c-2.9084 1.5102-5.9369 3.4964-6.9613 5.6188-1.4845 3.0756 1.4588 15.374 1.4588 15.374l2.5063-3.6313 5.1547 4.6214s-3.19-11.299-2.6577-14.331c0.63997-3.6459 5.7563-5.454 6.8926-5.8131-0.1066-0.16019-0.1806-0.34705-0.21136-0.54054-0.30022-0.0557-2.9362-0.54696-6.1821-1.2976z" fill-opacity=".2"/>
                        <path d="m-30.173 11.947c-0.6172 0.01-1.1541 0.04808-1.5746 0.12196-0.97757 0.17177-2.1247 0.16398-3.3445 0.03876-3.8966 0.90764-8.9207 1.4481-10.844 1.633-9e-3 0.08767-0.02935 0.17153-0.05581 0.2527 3.4598 1.4867 10.216 4.2029 13.25 4.1052 4.6571-0.14994 13.207 1.5338 13.207 1.5338l-3.4975-4.0308 5.4472-2.4195s-8.268-1.3048-12.588-1.2351z" fill-opacity=".2"/>
                        <path d="m-58.123 12.546-0.33848 0.17828s2.7248 0.5743 3.8473 0.85524c1.1226 0.28094 2.8918 0.80564 2.8918 0.80564v-0.0026c-0.10628-0.1605-0.18003-0.34747-0.21032-0.54105z" fill-opacity=".15"/>
                        <path d="m-35.082 12.106-0.01085 0.0016c-3.8638 0.89827-8.8283 1.4352-10.8 1.6257l-0.03307 0.0052-0.01085 0.05168c-0.0094 0.06371-0.02104 0.12644-0.03979 0.18655l-0.0041 0.01809s7.3839-0.9164 8.5065-1.1973c1.1226-0.28094 2.8944-0.64647 2.8944-0.64647z" fill-opacity=".15"/>
                    </g>
                </g>
            </svg>
        `
    }
}

window.customElements.define('gift-cover-ribbon', GiftCoverRibbon)