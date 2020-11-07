const test = {
    prop: 42,
    func: function() {
        setTimeout(function() {
            console.log(this.prop)
            console.log('Hello')
        }, 3000)
    },
};

test.func()