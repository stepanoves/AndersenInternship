const stack = (function() {
    const stack = [];

    return {
        push: (el) => {
            this.__stack.push(el);
        },

        pop: () => {
            return this.__stack.pop(); ;
        }
    }
})()