import Container from './container';
import './component.recorder';

class Main {
    static async start() {
        const container = document.querySelector('.container');
        const switchBtn = document.querySelector('.switch-btn');
        switchBtn.addEventListener('click', async() => {
            container.innerHTML = '';
            if (switchBtn.innerText === 'To Cart') {
                switchBtn.innerText = 'To Catalog';
                container.appendChild(await Container.get('cartItems').render());
            } else {
                switchBtn.innerText = 'To Cart';
                container.appendChild(await Container.get('catalogItems').render());
            }
        })
        container.appendChild(await Container.get('catalogItems').render())
    }    
}