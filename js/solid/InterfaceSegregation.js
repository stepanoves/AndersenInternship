class Flower {
    constructor(name, type, needleQuatity) {
        this.__name = name;
        this.__type = type;
        this.__needleQuantity = needleQuatity;
    }

    toGrow() {
        return true;
    }
}