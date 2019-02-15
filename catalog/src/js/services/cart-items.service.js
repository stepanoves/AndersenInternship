class CartItemsService {
    fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(new Map(JSON.parse(localStorage.getItem('cartMap'))));
            }, 0);
        }) 
    }
}