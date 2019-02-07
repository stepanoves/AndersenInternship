class Container {
    constructor() {
        this.__map = new Map();
    }

    register(key, className, dependenciesArray) {
        this.__map.set(key, {className, dependenciesArray});
    }

    setDependencies(key, dependenciesArray) {
        this.__map.get(key).dependenciesArray = dependenciesArray;
    }

    getDependencies(key) {
        const dependencies = this.__map.get(key).dependenciesArray;
        if (dependencies) {
            return this.__map.get(key).dependenciesArray.map((el) => {
                if (typeof dependencies === 'function') return this.get(el);
                return el;
            });
        }
    }
    get(key) {
        const className = this.__map.get(key).className;
        if (this.getDependencies(key)) {
            return new className(...this.getDependencies(key))
        } else {
            return new className()
        }
    }
}


class Car {
    constructor(name, wheel) {
        this.__wheel = wheel;
        this.__name = name;
    }

    getWheel() {
        return this.__wheel.getName();
    }

    getName() {
        return this.__name;
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

class Wheel2 {
    constructor() {
        this.__name = 'wheel2'
    }

    getName() {
        return this.__name;
    }
}

const cntr = new Container();
cntr.register('wheel', Wheel);
cntr.register('wheel2', Wheel2);
cntr.register('car', Car, ['bmw','wheel2']);

console.log(cntr.get('car').getName())

// cntr.setDependencies('car', ['audi','wheel2']);
// car = cntr.get('car');
// console.log(car.getWheel())
