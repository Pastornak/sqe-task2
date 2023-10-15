const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.header')
    }

    get registerBtn() {
        return cy.get(`${this.rootEl} .ico-register`)
    }

    get loginBtn() {
        return cy.get(`${this.rootEl} .ico-login`)
    }

    get shoppingCart() {
        return cy.get(`${this.rootEl} .ico-cart .cart-label`)
    }

    get shoppingCartQty() {
        return cy.get(`${this.rootEl} span.cart-qty`)
    }

    get wishlist() {
        return cy.get(`${this.rootEl} .ico-wishlist .cart-label`)
    }

    get wishlistQty() {
        return cy.get(`${this.rootEl} span.wishlist-qty`)
    }

    get account() {
        return cy.get(`${this.rootEl} .account`)
    }

    get logoutBtn() {
        return cy.get(`${this.rootEl} .ico-logout`)
    }
  
}

module.exports = HeaderComponent