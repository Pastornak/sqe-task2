const BaseComponent = require("../common/base.component");

class OrderProductsComponent extends BaseComponent {
    constructor() {
        super('.products')
    }

    get products() {
        return cy.get(`${this.rootEl} .a-left.name a`)
    }
}

module.exports = OrderProductsComponent