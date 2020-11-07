class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
class Figure extends Point {
    constructor(point) {
        this.point = point
    }
    print() {
        console.log('I\'m a figure');
        console.log(`Situation ${point}`);
    }
}

class Square extends Figure {
    print() {
        console.log('I\'m a square');
    }
}

class Circle extends Figure {
    constructor(radio) {
        super()
        this.radio = radio
    }
}

class Triangle extends Figure {
    print() {
        super.print();
        console.log('and a triangle')
    }
}


let draws = [new Figure(), new Square(), new Circle(), new Triangle()]
draws.forEach(f => f.print())