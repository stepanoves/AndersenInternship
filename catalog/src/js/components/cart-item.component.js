export default class CartItemComponent {

    constructor(cartItemActions) {
        this.cartItemActions = cartItemActions;
    }

    render(name, quantity) {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const nameP = document.createElement('p');
        nameP.innerText = `Product Name: ${name}`;

        const quantityP = document.createElement('p');
        quantityP.innerText = `Quantity: ${quantity}`;

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';

        removeBtn.addEventListener('click', () => this.cartItemActions.removeItemButtonClick(name));

        cartItem.appendChild(nameP);
        cartItem.appendChild(quantityP);
        cartItem.appendChild(removeBtn);

        return cartItem;
    }
}

CartItemComponent.$inject = ['cartItemActions'];

