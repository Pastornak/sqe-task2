const BaseComponent = require("../common/base.component");

class PaymentMethodComponent extends BaseComponent {
    constructor() {
        super('#opc-payment_method')
    }

    get title() {
        return cy.get(`${this.rootEl} .step-title h2`)
    }

    getElements(name) {
        const selector = {
            cashOnDelivery: '[value="Payments.CashOnDelivery"]',
            checkMoneyOrder: '[value="Payments.CheckMoneyOrder"]',
            creditCard: '[value="Payments.Manual"]',
            purchaseOrder: '[value="Payments.PurchaseOrder"]'
        }
        return cy.get(`${this.rootEl} ${selector[name]}`)
    }

     get continueBtn() {
        return cy.get(`${this.rootEl} .payment-method-next-step-button`)
    }
  
}

module.exports = PaymentMethodComponent