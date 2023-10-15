const BasePage = require("./base.page");
const {
    BillingAdressComponent,
    ShippingAdressComponent,
    ShippingMethodComponent,
    PaymentMethodComponent,
    PaymentInfoComponent,
    ConfirmOrderComponent
 } = require("../components")

class CheckoutPage extends BasePage {
    constructor() {
        super('/onepagecheckout')
        this.billingAdressComponent = new BillingAdressComponent()
        this.shippingAdressComponent = new ShippingAdressComponent()
        this.shippingMethodComponent = new ShippingMethodComponent()
        this.paymentMethodComponent = new PaymentMethodComponent()
        this.paymentInfoComponent = new PaymentInfoComponent()
        this.confirmOrderComponent = new ConfirmOrderComponent()
    }
}

module.exports = CheckoutPage