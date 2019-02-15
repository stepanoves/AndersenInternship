export default class QuantityComponent {
    constructor(quantityAction) {
        this.quantityAction = quantityAction;
    }
    
    render() {
        const quantityPanel = document.createElement('div');
        quantityPanel.className = 'quantity-panel';
        
        const quantity = document.createElement('input');
        quantity.className = 'quantity';
        quantity.value = 1;

        const btnPlus = document.createElement('button');
        btnPlus.className = 'plus-btn';
        btnPlus.innerText = '+';

        const btnMinus = document.createElement('button');
        btnMinus.className = 'minus-btn';
        btnMinus.innerText = '-';

        btnPlus.addEventListener('click', (e) => this.quantityAction.changeQuantityClick(e, quantity));
        btnMinus.addEventListener('click', (e) => this.quantityAction.changeQuantityClick(e, quantity));

        quantityPanel.appendChild(quantity);
        quantityPanel.appendChild(btnPlus);
        quantityPanel.appendChild(btnMinus);

        return quantityPanel;
    }
}

QuantityComponent.$inject = ['quantityAction'];
