const man = {
    name: 'Man',
    age: 20
}

const renderEntity = (entites) => {
    entites.forEach(element => {
        const h1 = document.createElement('h1');
        h1.innerText = `${element.name} ${element.age}`
        document.write(h1);
    });
}