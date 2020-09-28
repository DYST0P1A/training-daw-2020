"use strict"

// Crear un objeto Persona con los siguientes 
// datos (nombre, apellidos, edad, género, dirección)


const { kMaxLength } = require('buffer');

const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    let person = {
        name: 'John',
        lastname: 'Foo',
        years: 35,
        gender: 'male',
        address: 'fake street 123'
    }
    return person
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake street 123')
assert.strictEqual(person.name, 'John')
assert.strictEqual(person.lastname, 'Foo')

console.log(person)