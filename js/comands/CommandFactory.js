class CommandFactory {
    static create(type) {
        return CommandFactory.commands[type];
    }
}

CommandFactory.commands = {
    'add' : (receiver, source) => {
        return receiver + source;
    },

    'mul' : (receiver, source) => {
        return receiver * source;
    }
}  