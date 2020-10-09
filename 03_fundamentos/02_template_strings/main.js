function hello(name, lastname, years) {
<<<<<<< HEAD
    return `Hola ${name} ${lastname}, tienes ${years} años de edad`;
=======
>>>>>>> 2deb9fc6f597e12c6609e2dfe60d226ecf952546
}

let result = hello('John', 'Anderton', 35)
if (result != "Hola John Anderton, tienes 35 años de edad") {
    console.log('test fail')
    return
}

result = hello('John', 'Foo', 47)
if (result != "Hola John Foo, tienes 47 años de edad") {
    console.log('test fail')
    return
}

<<<<<<< HEAD
console.log("todo ok");
=======
console.log('Test OK')
>>>>>>> 2deb9fc6f597e12c6609e2dfe60d226ecf952546
