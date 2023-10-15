const BaseComponent = require("../common/base.component");

class OrderCompletedComponent extends BaseComponent {
    constructor() {
        super('.order-completed')
    }

    get successMessage() {
        return cy.get(`${this.rootEl} .title`)
    }

     get continueBtn() {
        return cy.get(`${this.rootEl} .order-completed-continue-button`)
    }

    get orderDetails() {
        return cy.get(`${this.rootEl} .details a`)
    }
  
}

module.exports = OrderCompletedComponent