const BasePage = require("./base.page");
const { SubCategoryItemsComponent } = require("../components")

class CategoriesPage extends BasePage {
    constructor(path) {
        super(`/${path}`)
        this.subCategoryItemsComponent = new SubCategoryItemsComponent()
    }
}

module.exports = CategoriesPage