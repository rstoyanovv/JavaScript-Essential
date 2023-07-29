class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        let a = Math.abs(firstPoint.x - secondPoint.x);
        let b = Math.abs(firstPoint.y - secondPoint.y);

        let distance = Math.sqrt(a ** 2 + b ** 2);

        return distance;
    }

    static counter = 1;

    get xValue() {
        return this.x;
    }

    get yValue() {
        return this.y;
    }

}

let p1 = new Point(3, 5);
let p2 = new Point(5.3, 18.9);

function print(point) {
    console.log(`Point ${Point.counter++}: x-> ${point.xValue} and y-> ${point.yValue}`);
}

print(p1);
print(p2);

console.log(`Distance is: ${Point.distance(p1, p2)}.`);