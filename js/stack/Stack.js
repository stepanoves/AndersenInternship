class Stack {
    constructor() {
        this.__stack = [];
    }

    push(el) {
        this.__stack.push(el);
    }

    pop() {
        const lastEl = this.__stack[this.__stack.length - 1];
        this.__stack.pop(); 
        return lastEl;
    }
    
}
