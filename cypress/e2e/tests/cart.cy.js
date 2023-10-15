/// <reference types="cypress" />

const {
  LoginPage,
  ShoppingCartPage,
  ProductsPage,
  PDPage,
  CheckoutPage,
  CheckoutCompletedPage,
  OrderDetailsPage
 } = require('../../po/pages')
const loginPage = new LoginPage()
const shoppingCartPage = new ShoppingCartPage()
const apparelShoesProductsPage = new ProductsPage('apparel-shoes')
const pdp = new PDPage()
const checkoutPage = new CheckoutPage()
const checkoutCompletedPage = new CheckoutCompletedPage()
const orderDetailsPage = new OrderDetailsPage()


describe('Verify cart functionality', () => {
  
  it('Verify that allows adding an item to the Wishlist', () => {
    cy.fixture('products').then( (products) => {
      apparelShoesProductsPage.open()
      apparelShoesProductsPage.productsComponent.getProduct(products.apparelShoes2).click()
      pdp.addToCartPDPComponent.addToWishlist.click()
      pdp.addToCartPDPComponent.barNotification
      .should('have.attr', 'style', 'display: block;')
      .and('contain', 'wishlist')
      pdp.headerComponent.wishlistQty.invoke('text').should('eq', '(1)')
    })
  })

  it('Verify that allows adding and removing an item from the cart', () => {
    cy.fixture('products').then( (products) => {
      apparelShoesProductsPage.open()
      apparelShoesProductsPage.productsComponent.getProduct(products.apparelShoes1).click()
      pdp.addToCartPDPComponent.addToCartBtn.click()
      pdp.addToCartPDPComponent.barNotification
      .should('have.attr', 'style', 'display: block;')
      .and('contain', 'shopping cart')
      pdp.headerComponent.shoppingCartQty.invoke('text').should('eq', '(1)')
      pdp.headerComponent.shoppingCart.click()
      shoppingCartPage.shoppingCartProductsComponent.getRemoveCheckbox(products.apparelShoes1).click()
      shoppingCartPage.shoppingCartButtonsComponent.updateBtn.click()
      shoppingCartPage.headerComponent.shoppingCartQty.invoke('text').should('eq', '(0)')
    })
  })

  it('Verify that allows checkout an item', () => {
    cy.fixture('products').then( (products) => {
      cy.fixture('user').then( (user) => {
        // go to PDP for the product
        apparelShoesProductsPage.open()
        apparelShoesProductsPage.productsComponent.getProduct(products.apparelShoes1).click()
        //add product to cart
        pdp.addToCartPDPComponent.addToCartBtn.click()
        pdp.addToCartPDPComponent.barNotification
        .should('have.attr', 'style', 'display: block;')
        .and('contain', 'shopping cart')
        pdp.headerComponent.shoppingCartQty.invoke('text').should('eq', '(1)')
        // go to shopping cart and checkout
        pdp.headerComponent.shoppingCart.click()
        shoppingCartPage.shoppingCartTotalsComponent.termsCheckbox.click()
        shoppingCartPage.shoppingCartTotalsComponent.checkoutBtn.click()
        loginPage.checkoutAsGuestComponent.checkoutAsGuestBtn.click()
        // fill in payment info on checkout page
        // --on billing adress component
        checkoutPage.billingAdressComponent.title.should('have.text', 'Billing address')
        checkoutPage.billingAdressComponent.getElements('firstName').type(user.firstName)
        checkoutPage.billingAdressComponent.getElements('lastName').type(user.lastName)
        checkoutPage.billingAdressComponent.getElements('email').type(user.email)
        checkoutPage.billingAdressComponent.getElements('country').select(user.country)
        checkoutPage.billingAdressComponent.getElements('city').type(user.city)
        checkoutPage.billingAdressComponent.getElements('address1').type(user.address1)
        checkoutPage.billingAdressComponent.getElements('zip').type(user.zip)
        checkoutPage.billingAdressComponent.getElements('phone').type(user.phone)
        checkoutPage.billingAdressComponent.continueBtn.click()
        // --on shipping adress component
        checkoutPage.shippingAdressComponent.title.should('have.text', 'Shipping address')
        checkoutPage.shippingAdressComponent.continueBtn.click()
        // --on shipping method component
        checkoutPage.shippingMethodComponent.title.should('have.text', 'Shipping method')
        checkoutPage.shippingMethodComponent.getElements('nextDayAir').click()
        checkoutPage.shippingMethodComponent.continueBtn.click()
        // --on payment method component
        checkoutPage.paymentMethodComponent.title.should('have.text', 'Payment method')
        checkoutPage.paymentMethodComponent.getElements('cashOnDelivery').click()
        checkoutPage.paymentMethodComponent.continueBtn.click()
        // --on payment info component
        checkoutPage.paymentInfoComponent.title.should('have.text', 'Payment information')
        checkoutPage.paymentInfoComponent.continueBtn.click()
        // --on confirm order component
        checkoutPage.confirmOrderComponent.title.should('have.text', 'Confirm order')
        checkoutPage.confirmOrderComponent.continueBtn.click()
        // verify success message
        checkoutCompletedPage.orderCompletedComponent.successMessage.should('contain.text', 'Your order has been successfully processed!')
        // verify the order is created
        checkoutCompletedPage.orderCompletedComponent.orderDetails.click()
        orderDetailsPage.orderProductsComponent.products.should('contain.text', products.apparelShoes1)
      })
    })
  })

})