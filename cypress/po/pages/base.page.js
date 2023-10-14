const { HeaderComponent, CategoriesNavComponent } = require('../components')

class BasePage {
    constructor(url) {
        this.url = url
        this.headerComponent = new HeaderComponent()
        this.categoriesNavComponent = new CategoriesNavComponent()
    }

    open() {
        cy.visit(this.url)
    }
}

module.exports = BasePage;