const BaseComponent = require("../common/base.component");

class SubCategoryItemsComponent extends BaseComponent {
    constructor() {
        super('.sub-category-grid')
    }

    getSubCategoriesList() {
        const items = []
        cy.get(`${this.rootEl} .title a`).each(($a) => items.push($a.text().trim()))
        return items
    }
}

module.exports = SubCategoryItemsComponent