class CatalogItemActions {
    addToCartClick(itemName, itemQuantity) {
        if (!localStorage.getItem('cartMap')) {
            console.log(1);
            localStorage.setItem('cartMap',  JSON.stringify(Array.from(new Map().entries())));
        }

        const cartMap = new Map(JSON.parse(localStorage.getItem('cartMap')))
        if (cartMap.has(itemName)) {
            cartMap.set(itemName, +cartMap.get(itemName) + +itemQuantity);
        } else {
            cartMap.set(itemName, itemQuantity);
        }

        localStorage.setItem('cartMap',  JSON.stringify(Array.from(cartMap.entries())));
    }
}