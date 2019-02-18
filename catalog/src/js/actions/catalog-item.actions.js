export default class CatalogItemActions {
    constructor(catalogItemService) {
        this.catalogItemService = catalogItemService;
    }
    async addToCartClick(itemName, itemQuantity) {
        await this.catalogItemService.fetchData(itemName, itemQuantity)
    }
}

CatalogItemActions.$inject = ['catalogItemService'];
