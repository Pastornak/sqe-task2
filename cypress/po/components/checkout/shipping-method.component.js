const BaseComponent = require("../common/base.component");

class ShippingMethodComponent extends BaseComponent {
    constructor() {
        super('#opc-shipping_method')
    }

    get title() {
        return cy.get(`${this.rootEl} .step-title h2`)
    }

    getElements(name) {
        const selector = {
            ground: '[value="Ground___Shipping.FixedRate"]',
            nextDayAir: '[value="Next Day Air___Shipping.FixedRate"]',
            secondDayAir: '[value="2nd Day Air___Shipping.FixedRate"]'
        }
        return cy.get(`${this.rootEl} ${selector[name]}`)
    }

     get continueBtn() {
        return cy.get(`${this.rootEl} .shipping-method-next-step-button`)
    }
  
}

module.exports = ShippingMethodComponent