/// <reference types="cypress" />

const { LandingPage, RegisterPage, RegisterResultPage, LoginPage } = require('../../po/pages')
const landingPage = new LandingPage()
const registerPage = new RegisterPage()
const registerResultPage = new RegisterResultPage()
const loginPage = new LoginPage()

describe('Verify that allows register and login a User', () => {
    beforeEach(() => {
      landingPage.open()
    })
  
    it('Register a user', () => {
      landingPage.headerComponent.registerBtn().click()
      registerPage.registerComponent.getElement('genderMale').click()
      registerPage.registerComponent.getElement('firstName').type('Harry')
      registerPage.registerComponent.getElement('lastName').type('Potter')
      registerPage.registerComponent.getElement('email').type('HJPOtter12@magic.com')
      registerPage.registerComponent.getElement('password').type('1tsakindofmag!c')
      registerPage.registerComponent.getElement('confirmPassword').type('1tsakindofmag!c')
      registerPage.registerComponent.getElement('registerButton').click()
      registerResultPage.registerResultComponent.result
      .should('contain', 'Your registration completed')
    })

    it('Login a user', () => {
    landingPage.headerComponent.loginBtn().click()
    loginPage.returningCustomerComponent.getElement('email').type('HJPOtter@magic.com')
    loginPage.returningCustomerComponent.getElement('password').type('1tsakindofmag!c')
    loginPage.returningCustomerComponent.getElement('loginBtn').click()
    landingPage.headerComponent.account
    .should('contain', 'HJPOtter@magic.com')
    })
})