const BaseComponent = require("../common/base.component");

class ShippingAdressComponent extends BaseComponent {
    constructor() {
        super('#opc-shipping')
    }

    get title() {
        return cy.get(`${this.rootEl} .step-title h2`)
    }

     get continueBtn() {
        return cy.get(`${this.rootEl} .new-address-next-step-button`)
    }
  
}

module.exports = ShippingAdressComponent