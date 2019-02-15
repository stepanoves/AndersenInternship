class CartItemActions {
    removeItemButtonClick(itemName) {
        const cartMap = new Map(JSON.parse(localStorage.getItem('cartMap')));
        cartMap.delete(itemName);
        localStorage.setItem('cartMap',  JSON.stringify(Array.from(cartMap.entries())));
    }
}