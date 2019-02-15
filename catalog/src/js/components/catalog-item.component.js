export default class CatalogItemComponent {
    constructor(quantityComponent, catalogItemActions) {
        this.quantityComponent = quantityComponent;
        this.catalogItemActions = catalogItemActions;
    }

    render(data) {
        const item = document.createElement('div');
        item.className = 'item';

        const name = document.createElement('h2');
        name.className = 'item-name';
        name.innerText = data.name;

        const itemPhotoDiv = document.createElement('div');
        itemPhotoDiv.className = 'item-photo';

        const itemPhotoImg = document.createElement('img');
        itemPhotoImg.src = `src/img/${data.imgLink}`;

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        itemInfo.innerHTML = `<p>${data.description}</p>`

        const quantity = this.quantityComponent.render();

        const addBtn = document.createElement('button');
        addBtn.className = 'add-btn';
        addBtn.innerText = 'Add to cart';

        addBtn.addEventListener('click', 
            async(e) => await this.catalogItemActions.addToCartClick(data.name, quantity.querySelector('.quantity').value));

        itemPhotoDiv.appendChild(itemPhotoImg);
        item.appendChild(name);
        item.appendChild(itemPhotoDiv);
        item.appendChild(itemInfo);
        item.appendChild(quantity);
        item.appendChild(addBtn);
        
        return item;
    }
}

CatalogItemComponent.$inject = ['quantityComponent', 'catalogItemActions'];