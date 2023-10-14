const BaseComponent = require("../common/base.component");

class ProductSelectorsComponent extends BaseComponent {
    constructor() {
        super('.product-selectors')
    }

    get sortByDD() {
        return cy.get(`${this.rootEl} [name='products-orderby']`)
    }

    get displayPerPage() {
        return cy.get(`${this.rootEl} [name='products-pagesize']`)
    }

}

module.exports = ProductSelectorsComponent