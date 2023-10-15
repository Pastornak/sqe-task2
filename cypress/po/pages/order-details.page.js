const BasePage = require("./base.page");
const { OrderProductsComponent } = require("../components")

class OrderDetailsPage extends BasePage {
    constructor(path) {
        super(`/orderdetails/${path}`)
        this.orderProductsComponent = new OrderProductsComponent()
    }
}

module.exports = OrderDetailsPage