function test(number, testCb) {
    return testCb(numer);
}

let isValid = function(value) { return value > 18; }
let isPair = function(value) { return value % 2 == 0; }

let result = test(6, isValid)
console.log(`Resultado ${result}`);

let result = isValid(5);
console.log(`Resultado ${result}`);
let result = isValid(19);
console.log(`Resultado ${result}`);