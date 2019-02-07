class WriterFactory {
    static create(type) {
        return WriterFactory.writers[type];
    }
}

WriterFactory.writers = {
    'display': (data) => { alert(data); },
    'console': (data) => { console.log(data); },
    'memory' : (data, stack) => { stack.push(data) }
};  