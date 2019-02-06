class Car {
    constructor(name, kmConsumption) {
        this.__name = name;
        this.__kmConsumption = kmConsumption;
    }

    fuelConsumption(lenght) {
        return this.__kmConsumption * lenght;
    } 
}

class Truck extends Car {
    constructor(name, kmConsumption) {
        super(name, kmConsumption);
    }

    fuelConsumption(lenght, truckWeigth) {
        return this.__kmConsumption * lenght * truckWeigth;
    } 
}