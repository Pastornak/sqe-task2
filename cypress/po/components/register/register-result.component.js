const BaseComponent = require("../common/base.component");

class RegisterResultComponent extends BaseComponent {
    constructor() {
        super('.registration-result-page')
    }

get result() {
    return cy.get(`${this.rootEl} .result`)
}
  
}

module.exports = RegisterResultComponent