const BaseComponent = require("../common/base.component");

class RegisterComponent extends BaseComponent {
    constructor() {
        super('.registration-page')
    }

getElement(name) {
    const selector = {
        genderMale: '#gender-male',
        genderFemale: '#gender-female',
        firstName: '[name="FirstName"]',
        lastName: '[name="LastName"]',
        email: '[name="Email"]',
        password: '[name="Password"]',
        confirmPassword: '[name="ConfirmPassword"]',
        registerButton: '[name="register-button"]'
    }
    return cy.get(`${this.rootEl} ${selector[name]}`)
}
  
}

module.exports = RegisterComponent