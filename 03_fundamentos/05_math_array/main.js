"use strict"

// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos


function doCalculation(array) {
    let total = 0
    let vmax = array[0]
    let vmin = array[0]

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (array[i] > vmax) {
            vmax = array[i]
        }
        if (array[i] < vmin) {
            vmin = array[i]
        }
    }
    console.log("Suma total de los elementos: " + total)
    console.log("El elemento más grande: " + vmax)
    console.log("El elemento más pequeño: " + vmin)

    let media = total / array.length
    console.log("Media de los elementos: " + media)
}

console.log("-Array 1-")
doCalculation([1, 2, 3, 4])
console.log("-Array 2-")
doCalculation([5, 5, 5, 5])
console.log("-Array 3-")
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5])