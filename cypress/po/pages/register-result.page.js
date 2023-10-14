const BasePage = require("./base.page");
const { RegisterResultComponent } = require("../components")


class RegisterResultPage extends BasePage {
    constructor() {
        super('/registerresult/1')
        this.registerResultComponent = new RegisterResultComponent()
    }
}

module.exports = RegisterResultPage