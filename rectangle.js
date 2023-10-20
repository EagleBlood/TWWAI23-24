var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.movePos = function (newX, newY) {
        this.x = newX;
        this.y = newY;
    };
    return Point;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Rectangle.prototype.moveRec = function (newX, newY) {
        this.a.movePos(newX, newY);
        this.b.movePos(newX, newY);
        this.c.movePos(newX, newY);
        this.d.movePos(newX, newY);
    };
    Rectangle.prototype.getArea = function () {
        var length = Math.abs(Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)));
        var width = Math.abs(Math.sqrt(Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)));
        return length * width;
    };
    return Rectangle;
}());
var pointA = new Point(0, 0);
var pointB = new Point(0, 10);
var pointC = new Point(10, 0);
var pointD = new Point(10, 10);
var rectangle = new Rectangle(pointA, pointB, pointC, pointD);
console.log("Pole: " + rectangle.getArea());
