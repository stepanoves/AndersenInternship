export default class QuantityActions {
    changeQuantityClick(event, input) {
        if (event.target.innerText === '+') {
            input.value = +input.value + 1;
        } else if (+input.value > 1){
            input.value = +input.value - 1;
        }
    }
}