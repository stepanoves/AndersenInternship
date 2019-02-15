import '../constants'

export default class CatalogItemService {
    fetchData(itemName, itemQuantity) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!localStorage.getItem(LOCAL_STORAGE_ITEM)) {
                    localStorage.setItem(LOCAL_STORAGE_ITEM,  []);
                }
        
                const cartMap = new Map(JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM)))
                if (cartMap.has(itemName)) {
                    cartMap.set(itemName, +cartMap.get(itemName) + +itemQuantity);
                } else {
                    cartMap.set(itemName, itemQuantity);
                }
        
                localStorage.setItem(LOCAL_STORAGE_ITEM,  JSON.stringify(Array.from(cartMap.entries())));
                resolve('Added');
            }, 0)
        });
    }
}