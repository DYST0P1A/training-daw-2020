const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake stree 123')
assert.strictEqual(person.name, 'John')
assert.strictEqual(person.lastname, 'Foo')