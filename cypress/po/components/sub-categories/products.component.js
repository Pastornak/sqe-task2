const BaseComponent = require("../common/base.component");

class ProductsComponent extends BaseComponent {
    constructor() {
        super('.product-grid')
    }

    getProductsList() {
        const items = []
        cy.get(`${this.rootEl} .product-title a`).each(($a) => items.push($a.text().trim()))
        return items
    }

    getProductsPrices() {
        const items = []
        cy.get(`${this.rootEl} .prices .actual-price`).each(($span) => items.push($span.text().replace(/^\D+/g, '')))
        return items
    }

    getAddtoCartBtn(name) {
        return cy.contains(name).parent().siblings('.add-info').find('.product-box-add-to-cart-button')
    }

    getProduct(name) {
        return cy.contains(name)
    }

}

module.exports = ProductsComponent