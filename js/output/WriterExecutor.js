class WriterExecutor {
    static execute(type, data, stack = null) {
        return WriterFactory.create(type)(data, stack);
    }
}