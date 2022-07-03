// static properties and methods

class Circle{
    static pi = 3.1415926535;
    constructor(radius){
        this.radius = radius
    }
    getArea(){
        return this.radius * this.radius * Circle.pi;
    }
    getPerimeter(){
        return 2 * Circle.pi * this.radius;
    }

    static getAreaFormula(){
        console.log("r * r * * 3.14");
    }
}

Circle.getAreaFormula();

let c1 = new Circle(5);
console.log(c1.getArea());