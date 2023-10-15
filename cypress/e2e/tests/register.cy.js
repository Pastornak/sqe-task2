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
    cy.fixture('user').then(user => {
      landingPage.headerComponent.registerBtn.click()
      registerPage.registerComponent.getElement('genderMale').click()
      registerPage.registerComponent.getElement('firstName').type(user.firstName)
      registerPage.registerComponent.getElement('lastName').type(user.lastName)
      registerPage.registerComponent.getElement('email').type(user.email)
      registerPage.registerComponent.getElement('password').type(user.password)
      registerPage.registerComponent.getElement('confirmPassword').type(user.password)
      registerPage.registerComponent.getElement('registerButton').click()
      registerResultPage.registerResultComponent.result
      .should('contain', 'Your registration completed')
    })
  })

  it('Login a user', () => {
    cy.fixture('user').then(user => {
      landingPage.headerComponent.loginBtn.click()
      loginPage.returningCustomerComponent.getElement('email').type(user.email)
      loginPage.returningCustomerComponent.getElement('password').type(user.password)
      loginPage.returningCustomerComponent.getElement('loginBtn').click()
      landingPage.headerComponent.account
      .should('contain', user.email)
    })
  })
})