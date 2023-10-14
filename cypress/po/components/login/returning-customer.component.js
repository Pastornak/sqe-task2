const BaseComponent = require("../common/base.component");

class ReturningCustomerComponent extends BaseComponent {
    constructor() {
        super('.returning-wrapper')
    }

getElement(name) {
    const selector = {
        email: '[name="Email"]',
        password: '[name="Password"]',
        rememberMe: '[name="RememberMe"]',
        loginBtn: '.login-button'
    }
    return cy.get(`${this.rootEl} ${selector[name]}`)
}
  
}

module.exports = ReturningCustomerComponent