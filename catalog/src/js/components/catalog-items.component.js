class CatalogItemsComponent {
    constructor(catalogItem, catalogItemsService) {
        this.catalogItem = catalogItem;
        this.catalogItemsService = catalogItemsService;
    }
    async generate() {
        const data = await this.catalogItemsService.fetchData();
        const itemsArray = data.map(obj => this.catalogItem.generate(obj));

        const catalogItems = document.createElement('div');
        
        const temp = [];

        itemsArray.forEach(item => {
            temp.push(item);

            if (temp.length === 3) {
                const row = document.createElement('div');
                row.className = 'items';
                row.append(...temp);

                catalogItems.appendChild(row);
                temp.length = 0;
            }

        });

        if (temp.length) catalogItems.append(...temp);

        return catalogItems;
    }
}

CatalogItemsComponent.$inject = ['catalogItem', 'catalogItemsService'];