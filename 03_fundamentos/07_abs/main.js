const assert = require('assert').strict;

let value = 0;

function abs(value) {
    if (value < 0) {
        value = -value
    }
    return value
}
assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)