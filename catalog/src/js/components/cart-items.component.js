export default class CartItemsComponent {
    constructor(cartItem, cartItemsService) {
        this.cartItem = cartItem;
        this.cartItemsService = cartItemsService;
    }

    async render() {
        const data = await this.cartItemsService.fetchData();
        
        const cartItems = document.createElement('div');
        cartItems.className = 'cart-items';

        data.forEach((value, key) => {
            cartItems.appendChild(this.cartItem.render(key, value));
        });

        return cartItems;
    }
}

CartItemsComponent.$inject = ['cartItem', 'cartItemsService'];