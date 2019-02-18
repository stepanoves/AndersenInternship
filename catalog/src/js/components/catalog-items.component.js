export default class CatalogItemsComponent {
    constructor(catalogItem, catalogItemsService) {
        this.catalogItem = catalogItem;
        this.catalogItemsService = catalogItemsService;
    }
    async render() {
        const data = await this.catalogItemsService.fetchData();
        const itemsArray = data.map(obj => this.catalogItem.render(obj));

        const catalogItems = document.createElement('div');

        catalogItems.append(...itemsArray);

        return catalogItems;
    }
}

CatalogItemsComponent.$inject = ['catalogItem', 'catalogItemsService'];