(function() {
    const operation = document.getElementById('operation');
    const writerType = document.getElementById('writer-type');
    const doButton = document.getElementById('do');
    const memory = new Stack();
    doButton.addEventListener('click', () => {
        WriterExecutor.execute(writerType.value, CommandExecutor.execute(commandParser(operation.value)), memory);
    });
})();  