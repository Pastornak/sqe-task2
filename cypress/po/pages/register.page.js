const BasePage = require("./base.page");
const { RegisterComponent } = require("../components")


class RegisterPage extends BasePage {
    constructor() {
        super('/register')
        this.registerComponent = new RegisterComponent()
    }
}

module.exports = RegisterPage