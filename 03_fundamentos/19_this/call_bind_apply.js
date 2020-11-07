const test = {
    prop: 42,
    func: function() {
        console.log(this.prop)
    },
};


const printProp = function() {
    console.log(`Prop value ${this.prop}`)
}

test.func()
printProp()

let printPropBinded = printProp.bind(test)
printPropBinded()

printProp.call(test)
printProp.apply(test)