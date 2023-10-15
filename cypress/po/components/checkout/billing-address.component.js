const BaseComponent = require("../common/base.component");

class BillingAdressComponent extends BaseComponent {
    constructor() {
        super('#opc-billing')
    }

    get title() {
        return cy.get(`${this.rootEl} .step-title h2`)
    }

    getElements(name) {
        const selector = {
            firstName: '[name="BillingNewAddress.FirstName"]',
            lastName: '[name="BillingNewAddress.LastName"]',
            email: '[name="BillingNewAddress.Email"]',
            company: '[name="BillingNewAddress.Company"]',
            country: '[name="BillingNewAddress.CountryId"]',
            state: '[name="BillingNewAddress.StateProvinceId"]',
            city: '[name="BillingNewAddress.City"]',
            address1: '[name="BillingNewAddress.Address1"]',
            address2: '[name="BillingNewAddress.Address2"]',
            zip: '[name="BillingNewAddress.ZipPostalCode"]',
            phone: '[name="BillingNewAddress.PhoneNumber"]',
            fax: '[name="BillingNewAddress.FaxNumber"]'
        }
        return cy.get(`${this.rootEl} ${selector[name]}`)
    }

    get continueBtn() {
        return cy.get(`${this.rootEl} .new-address-next-step-button`)
    }
  
}

module.exports = BillingAdressComponent