const BaseComponent = require("../common/base.component");

class ConfirmOrderComponent extends BaseComponent {
    constructor() {
        super('#opc-confirm_order')
    }

    get title() {
        return cy.get(`${this.rootEl} .step-title h2`)
    }

     get continueBtn() {
        return cy.get(`${this.rootEl} .confirm-order-next-step-button`)
    }
  
}

module.exports = ConfirmOrderComponent