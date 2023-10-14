class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootEl() {
        return this.rootSelector;
    }

    get barNotification() {
        return cy.get('.bar-notification', {timeout:5000})
    }

}

module.exports = BaseComponent;