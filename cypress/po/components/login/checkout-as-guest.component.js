const BaseComponent = require("../common/base.component");

class CheckoutAsGuestComponent extends BaseComponent {
    constructor() {
        super('.checkout-as-guest-or-register-block')
    }

    get checkoutAsGuestBtn() {
        return cy.get(`${this.rootEl} .checkout-as-guest-button`)
    }
  
}

module.exports = CheckoutAsGuestComponent