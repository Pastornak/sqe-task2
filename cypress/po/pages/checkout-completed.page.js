const BasePage = require("./base.page");
const { OrderCompletedComponent } = require("../components")

class CheckoutCompletedPage extends BasePage {
    constructor() {
        super('/checkout/completed/')
        this.orderCompletedComponent = new OrderCompletedComponent()
    }
}

module.exports = CheckoutCompletedPage