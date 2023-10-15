const BasePage = require("./base.page");
const {
    ShoppingCartProductsComponent,
    ShoppingCartButtonsComponent,
    ShoppingCartTotalsComponent
} = require("../components")

class ShoppingCartPage extends BasePage {
    constructor() {
        super(`/cart`)
        this.shoppingCartProductsComponent = new ShoppingCartProductsComponent()
        this.shoppingCartButtonsComponent = new ShoppingCartButtonsComponent()
        this.shoppingCartTotalsComponent = new ShoppingCartTotalsComponent()
    }
}

module.exports = ShoppingCartPage