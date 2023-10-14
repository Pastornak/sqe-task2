const BaseComponent = require("./base.component");

class CategoriesNavComponent extends BaseComponent {
    constructor() {
        super('.block-category-navigation')
    }

    getCategory(name) {
        const selector = {
            books: "[href='/books']",
            computers: "[href='/computers']",
            electronics: "[href='/electronics']",
            "apparel-shoes": "[href='/apparel-shoes']",
            digitalDownloads: "[href='/digitalDownloads']",
            jewelery: "[href='/jewelery']",
            giftCards: "[href='/giftCards']"
        }
        return cy.get(`${this.rootEl} ${selector[name]}`)
    }
}

module.exports = CategoriesNavComponent