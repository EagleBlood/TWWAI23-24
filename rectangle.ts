//zad1

class Point
{
    x:number;
    y:number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    movePos(newX: number, newY: number)
    {
        this.x = newX;
        this.y = newY;
    }
}


class Rectangle
{
    a: Point;
    b: Point;
    c: Point;
    d: Point;

    constructor(a:Point, b:Point, c:Point, d:Point) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    moveRec(newX: number, newY:number)
    {
        this.a.movePos(newX, newY);
        this.b.movePos(newX, newY);
        this.c.movePos(newX, newY);
        this.d.movePos(newX, newY);
    }

    getArea() {
        const length = Math.abs(Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)));
        const width = Math.abs(Math.sqrt(Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)));
        return length * width;
    }
}


const pointA = new Point(0, 0);
const pointB = new Point(0, 10);
const pointC = new Point(10, 0);
const pointD = new Point(10, 10);

const rectangle = new Rectangle(pointA, pointB, pointC, pointD);

console.log("Zadanie 1\n\r");
console.log("Pole: " + rectangle.getArea() + "\n\n\r");