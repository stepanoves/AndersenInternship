import '../constants'

export default class CartItemActions {
    removeItemButtonClick(itemName) {
        const cartMap = new Map(JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM)));
        cartMap.delete(itemName);
        localStorage.setItem(LOCAL_STORAGE_ITEM,  JSON.stringify(Array.from(cartMap.entries())));
    }
}