const BaseComponent = require("../common/base.component");

class ShoppingCartButtonsComponent extends BaseComponent {
    constructor() {
        super('form .buttons')
    }

    get updateBtn() {
        return cy.get(`${this.rootEl} .update-cart-button`)
    }

}

module.exports = ShoppingCartButtonsComponent