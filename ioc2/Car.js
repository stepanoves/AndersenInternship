class Car {
    constructor(wheel) {
        this.__wheel = wheel;
    }

    getWheel() {
        return this.__wheel.getName();
    }

}

Car.$inject = [Wheel2];