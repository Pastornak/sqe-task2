const BaseComponent = require("../common/base.component");

class ShoppingCartProductsComponent extends BaseComponent {
    constructor() {
        super('.cart')
    }

    getRemoveCheckbox(name) {
        return cy.get(`${this.rootEl} .product`).contains(name).parent().siblings('.remove-from-cart').find('[name="removefromcart"]')
    }

}

module.exports = ShoppingCartProductsComponent