const BaseComponent = require("../common/base.component");

class AddToCartPDPComponent extends BaseComponent {
    constructor() {
        super('.add-to-cart')
    }

    get addToCartBtn() {
        return cy.get(`${this.rootEl} .add-to-cart-button`)
    }

    get addToWishlist() {
        return cy.get(`${this.rootEl} .add-to-wishlist-button`)
    }
}

module.exports = AddToCartPDPComponent