const BaseComponent = require("../common/base.component");

class PaymentInfoComponent extends BaseComponent {
    constructor() {
        super('#opc-payment_info')
    }

    get title() {
        return cy.get(`${this.rootEl} .step-title h2`)
    }

     get continueBtn() {
        return cy.get(`${this.rootEl} .payment-info-next-step-button`)
    }
  
}

module.exports = PaymentInfoComponent