const assert = require('assert').strict;

function nextPairs(value) {
    let value1, value2
    if (value % 2 != 0) {
        value1 = value - 1
        value2 = value + 1
        return [value1, value2]
    } else {
        value1 = value - 2
        value2 = value + 2
        return [value1, value2]
    }
}

assert.deepStrictEqual(nextPairs(3), [2, 4])
assert.deepStrictEqual(nextPairs(4), [2, 6])