class Container {

    static register(token, className) {
        Container.__map.set(token, className);
    }

    static get(token) {
        const className = Container.__map.get(token);

        if (!className) {
            throw Error(`Not provider for ${token}`)
        } 
        
        return className.$inject 
            ? new className(...className.$inject.map((el) => this.get(el))) 
            : new className();
    }

    static run(mainClass) {
        mainClass.start();
    }
}

Container.__map = new Map();