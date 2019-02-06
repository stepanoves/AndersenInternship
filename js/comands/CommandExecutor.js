class CommandExecutor {
    static execute([type, receiver, source]) {
        return CommandFactory.create(type)(receiver, source);
    }
}  