/// <reference types="cypress" />

const { LandingPage, CategoriesPage, ProductsPage } = require('../../po/pages')
const landingPage = new LandingPage()
const computersCategoryPage = new CategoriesPage('computers')
const booksProductsPage = new ProductsPage('books')
const jewelryProductsPage = new ProductsPage('jewelry')
const apparelShoesProductsPage = new ProductsPage('apparel-shoes')
const cameraPhotoProductsPage = new ProductsPage('camera-photo')

describe('Verify categories and sub-categories UI', () => {
  
    it('Verify that Computers group has 3 sub-groups with correct names', () => {
      computersCategoryPage.open()
      landingPage.categoriesNavComponent.getCategory('computers').click()
      const items = computersCategoryPage.subCategoryItemsComponent.getSubCategoriesList()
      cy.wrap(items).should('deep.equal', ['Desktops', 'Notebooks', 'Accessories'])
    })

    it('Verify that allows sorting items (Price: Low to High)', () => {
      booksProductsPage.open()
      booksProductsPage.productSelectorsComponent.sortByDD.select('Price: Low to High')
      const sortedItems = booksProductsPage.productsComponent.getProductsPrices()
      const items = booksProductsPage.productsComponent.getProductsPrices()
      cy.wrap(items)
      .then(($arr) => { cy.wrap($arr.sort( (a,b) => {return Number(a) - Number(b)} ))})
      .should('deep.equal', sortedItems)
    })

    it('Verify that allows sorting items (Price: High to Low)', () => {
      jewelryProductsPage.open()
      jewelryProductsPage.productSelectorsComponent.sortByDD.select('Price: High to Low')
      const sortedItems = jewelryProductsPage.productsComponent.getProductsPrices()
      const items = jewelryProductsPage.productsComponent.getProductsPrices()
      cy.wrap(items)
      .then(($arr) => { cy.wrap($arr.sort( (a,b) => {return Number(b) - Number(a)} ))})
      .should('deep.equal', sortedItems)
    })

    it('Verify that allows sorting items (Name: A to Z)', () => {
      apparelShoesProductsPage.open()
      apparelShoesProductsPage.productSelectorsComponent.sortByDD.select('Name: A to Z')
      const sortedItems = apparelShoesProductsPage.productsComponent.getProductsList()
      const items = apparelShoesProductsPage.productsComponent.getProductsList()
      cy.wrap(items)
      .then(($arr) => { cy.wrap($arr.sort( (a,b) => {
        if(a.toLowerCase() < b.toLowerCase()) { return -1; }
        if(a.toLowerCase() > b.toLowerCase()) { return 1; }
        return 0;
      } ))})
      .should('deep.equal', sortedItems)
    })

    it('Verify that allows sorting items (Name: Z to A)', () => {
      cameraPhotoProductsPage.open()
      cameraPhotoProductsPage.productSelectorsComponent.sortByDD.select('Name: Z to A')
      const sortedItems = cameraPhotoProductsPage.productsComponent.getProductsList()
      const items = cameraPhotoProductsPage.productsComponent.getProductsList()
      cy.wrap(items)
      .then(($arr) => { cy.wrap($arr.sort( (a,b) => {
        if(a.toLowerCase() < b.toLowerCase()) { return 1; }
        if(a.toLowerCase() > b.toLowerCase()) { return -1; }
        return 0;
      } ))})
      .should('deep.equal', sortedItems)
    })

    it('Verify that allows changing number of items on page', () => {
      apparelShoesProductsPage.open()
      const initialItems = apparelShoesProductsPage.productsComponent.getProductsList()
      cy.wrap(initialItems).should('have.length', 8)
      apparelShoesProductsPage.productSelectorsComponent.displayPerPage.select('12')
      const items = apparelShoesProductsPage.productsComponent.getProductsList()
      cy.wrap(items).should('have.length', 12)
    })

    it('Verify that allows adding an item to the cart from SRP', () => {
      booksProductsPage.open()
      booksProductsPage.productsComponent.getAddtoCartBtn('Computing and Internet').click()
      booksProductsPage.productsComponent.barNotification
      .should('have.attr', 'style', 'display: block;')
      .and('contain', 'shopping cart')
      booksProductsPage.headerComponent.shoppingCartQty.invoke('text').should('eq', '(1)')
    })

})