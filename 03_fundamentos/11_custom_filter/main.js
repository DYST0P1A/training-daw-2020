const assert = require('assert').strict;

function select(array, condition) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            newArray.push(array[i])
        }
    }
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
    //let pairs = function(value) { return value % 2 == 0 }
let pairs = value => value % 2 == 0
    //let gt15 = function(value) { return value > 15 }
let gt15 = value => value > 15
    //let lt10 = function(value) { return value < 10 }
let lt10 = value => value < 10
    // sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])