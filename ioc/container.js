class Container {
    constructor() {
        this.__map = new Map();
    }

    register(key, className, dependenciesArray) {
        this.__map.set(key, {className, dependenciesArray});
    }

    getDependencies(key) {
        if (this.__map.get(key).dependenciesArray !== undefined) {
            return this.__map.get(key).dependenciesArray.map((el) => {
                return this.get(el);
            });
        }
    }
    get(key) {
        const className = this.__map.get(key).className;
        if (this.getDependencies(key) !== undefined) {
            return new className(...this.getDependencies(key))
        } else {
            return new className()
        }
    }
}


class Car {
    constructor(wheel) {
        this.__wheel = wheel;
    }

    getWheel() {
        return this.__wheel.getName();
    }
}

class Wheel {
    constructor() {
        this.__name = 'wheel1'
    }

    getName() {
        return this.__name;
    }
}

const cntr = new Container();
cntr.register('wheel', Wheel);
cntr.register('car', Car, ['wheel']);

var car = cntr.get('car');
console.log(car.getWheel())
