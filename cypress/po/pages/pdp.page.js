const BasePage = require("./base.page");
const { AddToCartPDPComponent } = require("../components")

class PDPage extends BasePage {
    constructor(path) {
        super(`/${path}`)
        this.addToCartPDPComponent = new AddToCartPDPComponent()
    }

}

module.exports = PDPage