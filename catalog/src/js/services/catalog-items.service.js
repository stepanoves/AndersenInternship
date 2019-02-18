export default class CatalogItemsService {

    fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch('src/js/services/data.json', {
                    method: 'GET'
                }).then(result => resolve(result.json()))
            }, 0)
        });
    }
    
}