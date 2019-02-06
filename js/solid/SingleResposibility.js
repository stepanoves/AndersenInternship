class Person {
    constructor(name, age) {
        this.__name = name;
        this.__age = age;
    }

    isAdult() {
        return this.__age > 18;
    }

    getUserForm() {
        return `
            <div>
                <h1>${this.__name}</h1>
                <h1>${this.__age}</h1>
            </div>
        `
    }
}