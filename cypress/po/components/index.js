const HeaderComponent = require('./common/header.component');
const CategoriesNavComponent = require('./common/categories-nav.component');
const RegisterComponent = require('./register/register.component');
const RegisterResultComponent = require('./register/register-result.component');
const ReturningCustomerComponent = require('./login/returning-customer.component');
const SubCategoryItemsComponent = require('./categories/sub-category-items.component');
const ProductsComponent = require('./sub-categories/products.component');
const ProductSelectorsComponent = require('./sub-categories/product-selectors.component');
const AddToCartPDPComponent = require('./pdp/add-to-cart.component');
const ShoppingCartProductsComponent = require('./shopping-cart/shopping-cart-products.component');
const ShoppingCartButtonsComponent = require('./shopping-cart/shopping-cart-buttons.component');
const ShoppingCartTotalsComponent = require('./shopping-cart/shopping-cart-totals.component');
const CheckoutAsGuestComponent = require('./login/checkout-as-guest.component');
const BillingAdressComponent = require('./checkout/billing-address.component');
const ShippingAdressComponent = require('./checkout/shipping-address.component');
const ShippingMethodComponent = require('./checkout/shipping-method.component');
const PaymentMethodComponent = require('./checkout/payment-method.component');
const PaymentInfoComponent = require('./checkout/payment-info.component');
const ConfirmOrderComponent = require('./checkout/confirm-order.component');
const OrderCompletedComponent = require('./checkout/completed-order.component');
const OrderProductsComponent = require('./order-info/order-products.component');

module.exports = {
    HeaderComponent,
    RegisterComponent,
    RegisterResultComponent,
    ReturningCustomerComponent,
    SubCategoryItemsComponent,
    CategoriesNavComponent,
    ProductsComponent,
    ProductSelectorsComponent,
    AddToCartPDPComponent,
    ShoppingCartProductsComponent,
    ShoppingCartButtonsComponent,
    ShoppingCartTotalsComponent,
    CheckoutAsGuestComponent,
    BillingAdressComponent,
    ShippingAdressComponent,
    ShippingMethodComponent,
    PaymentMethodComponent,
    PaymentInfoComponent,
    ConfirmOrderComponent,
    OrderCompletedComponent,
    OrderProductsComponent
}
