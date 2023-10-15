const BaseComponent = require("../common/base.component");

class ShoppingCartTotalsComponent extends BaseComponent {
    constructor() {
        super('form .totals')
    }

    get termsCheckbox() {
        return cy.get(`${this.rootEl} [name='termsofservice']`)
    }
    
    get checkoutBtn() {
        return cy.get(`${this.rootEl} [name='checkout']`)
    }

}

module.exports = ShoppingCartTotalsComponent