class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    static counter = 1;

    calcArea() {
        return this.width * this.height;
    }

    calcPerimetar() {
        return 2*this.width + 2*this.height;
    }

    get Color() {
        return this.color;
    }
}

let r1 = new Rectangle(3, 4, 'black');
let r2 = new Rectangle(3, 22, 'green');
console.log(`Rectangle ${Rectangle.counter++} has area of ${r1.calcArea()} and perimetar of ${r1.calcPerimetar()} with color ${r1.Color}.`);
console.log(`Rectangle ${Rectangle.counter++} has area of ${r2.calcArea()} and perimetar of ${r2.calcPerimetar()} with color ${r2.Color}.`);