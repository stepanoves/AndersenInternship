class Container {
    
    static register(className) {
        this.__map.set(className, className.$inject);
    }

    static get(className) {
        if (className.$inject) {
            return new className(...className.$inject.map((el) => this.get(el)));
        } else {
            return new className();
        }
    }

    static run(mainClass) {
        mainClass.start();
    }
}

Container.__map = new Map();