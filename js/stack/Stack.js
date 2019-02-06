class Stack {
    constructor() {
        this.__stack = [];
    }

    push(el) {
        this.__stack.push(el);
    }

    pop() {
        return this.__stack.pop(); ;
    }
    
} 
