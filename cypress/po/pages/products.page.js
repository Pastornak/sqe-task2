const BasePage = require("./base.page");
const { ProductSelectorsComponent, ProductsComponent } = require("../components")

class ProductsPage extends BasePage {
    constructor(path) {
        super(`/${path}`)
        this.productSelectorsComponent = new ProductSelectorsComponent()
        this.productsComponent = new ProductsComponent()
    }

}

module.exports = ProductsPage