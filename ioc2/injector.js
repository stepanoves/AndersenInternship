class Injector {

    static inject(className) {
        Injector.map.set(className, className.$inject);
    }

    static get(className) {
        if (this.getDependencies(className)) {
            return new className(...this.getDependencies(className));
        } else {
            return new className();
        }
    }

    static getDependencies(className) {
        const dependencies = Injector.map.get(className);
        if(dependencies) {
            return dependencies.map( (el) => {
                return this.get(el);
            });
        }
    }
}

Injector.map = new Map();