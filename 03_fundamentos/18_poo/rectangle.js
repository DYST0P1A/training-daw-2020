class Rectangle {

    // add x1, y1
    constructor(x, y, x1, y1) {
        this.x = x;
        this.x1 = x1;
        this.y = y;
        this.y1 = y1;
    }

    print() {
        console.log(`[${this.x}, ${this.y}]-[${this.x1}, ${this.y1}]`)
    }

    area() {
        return Math.abs((this.x1 - this.x) * (this.y1 - this.y))
    }

    overlay(rectangle) {
        rectangle.print()
        return this.checkOnePoint(rectangle.x, rectangle.y) || this.checkOnePoint(rectangle.x1, rectangle.y1)
    }

    checkOnePoint(w, z) {
        return w > this.x && w < this.x1 &&
            z > this.y && w < this.y1

    }
}

let r1 = new Rectangle(0, 0, 5, 5);
let r2 = new Rectangle(4, 4, 10, 10);
let r3 = new Rectangle(6, 4, 10, 10);

r1.print()
r2.print()

let area = r1.area();
console.log(`area ${area}`)

let isOverlay = r1.overlay(r2)
console.log(`is overlay ${isOverlay}`)
isOverlay = r2.overlay(r3)
console.log(`is overlay ${isOverlay}`)