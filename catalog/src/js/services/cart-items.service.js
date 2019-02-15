export default class CartItemsService {
    fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(new Map(JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM))));
            }, 0);
        }) 
    }
}