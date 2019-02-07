const stack = (function() {
    const stack = [];

    return {
        push: (el) => {
            stack.push(el);
        },

        pop: () => {
            return stack.pop(); ;
        }
    }
})()
