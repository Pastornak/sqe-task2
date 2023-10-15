const BasePage = require("./base.page");
const { ReturningCustomerComponent, CheckoutAsGuestComponent } = require("../components")

class LoginPage extends BasePage {
    constructor() {
        super('/login')
        this.returningCustomerComponent = new ReturningCustomerComponent()
        this.checkoutAsGuestComponent = new CheckoutAsGuestComponent()
    }
}

module.exports = LoginPage