// class Person {
//     constructor(name, year) {
//         this.name = name
//         this.lastname = 'Foo'
//         this.year = year
//     }

//     sayHi() {
//         console.log(`Hola ${this.name} ${this.lastname} y tengo ${this.year} años`)
//     }

//     birthday() {
//         this.year += 1
//     }
// }

// let persona1 = new Person('John')
// let persona2 = new Person('Paco')

// persona1.sayHi()
// persona2.sayHi()

class Car {
    constructor(marca, modelo, consumoPor100, total, lactuales) {
        this.marca = marca
        this.modelo = modelo
        this.consumoPor100 = consumoPor100
        this.total = total
        this.lactuales = lactuales
    }

    info() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Consumo: ${this.consumoPor100} l/100, Depósito: ${this.total} l \n`)
    }

    reposta(litros) {
        if ((this.lactuales + litros) > this.total) {
            this.lactuales = this.total
            console.log(`!No puedes repostar más litros de los que tiene el depósito!`)
        } else {
            this.lactuales += litros
        }
        console.log(`Depósito actual: ${this.lactuales}/${this.total} l`)
    }

    move(distancia) {
        let consumoviaje = (distancia * this.consumoPor100) / 100
        this.lactuales -= consumoviaje
        console.log(`\n ** Viaje de ${distancia} km **`)
        console.log(`Combustible consumido: ${consumoviaje} l`)
        console.log(`Depósito actual: ${this.lactuales.toFixed(2)}/${this.total} l`)

    }

    restante() {
        let kmrestantes = (this.lactuales * 100) / this.consumoPor100
        console.log(`Km restantes: ${kmrestantes.toFixed(2)} km`)
    }


}

let car1 = new Car('Ferrari', '488', 11, 78, 35)
car1.info()
car1.reposta(43)
car1.move(158)
car1.restante()