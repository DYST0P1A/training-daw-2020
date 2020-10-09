const assert = require('assert').strict

function insertIfNotExists(array, item, position) {

    let exists = false

    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            exists = true
        }
    }

    if (!exists) {
        if (!position) {
            array.push(item)
        } else {
            array.unshift(item)
        }
    }
    return array
}


let array = ['pera', 'manzana']

let result = insertIfNotExists(array, 'pera', false)
assert.deepStrictEqual(result, ['pera', 'manzana'])

result = insertIfNotExists(array, 'melón', false)
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(array, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])