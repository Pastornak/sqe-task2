const BasePage = require("./base.page");
const { ReturningCustomerComponent } = require("../components")

class LoginPage extends BasePage {
    constructor() {
        super('/login')
        this.returningCustomerComponent = new ReturningCustomerComponent()
    }
}

module.exports = LoginPage