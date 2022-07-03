// function Person(name, age, height, weight){
//     this.name = name,
//     this.age = age,
//     this.height = height,
//     this.weight = weight
// }

// Person.prototype.sayHi = function(){
//     console.log(this.name + 'says Hi !!');
// }

// let Wilson = new Person("Wilson Ren", 25, 179, 75);
// let Mike = new Person("Mike", 26, 185, 90);


// Wilson.sayHi();
// Mike.sayHi();

class Person {
    constructor(name, age, height, weight){
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
    }
    sayHi(){
        console.log(this.name + 'says Hi !!');
    }
    intro(){
        console.log("Hi, my name is" + this.name + ".");
    }
}

let Wilson = new Person("Wilson Ren", 25, 179, 75);
let Mike = new Person("Mike", 26, 185, 90);

console.log(Wilson.sayHi === Mike.sayHi);


// extends Person  => 繼承 上面 class Person  (name, age, height, weight)

class Student extends Person{
    constructor(name, age, height, weight, major, grade){
        super(name, age, height, weight);
        this.major = major,
        this.grade = grade
    }
    study(){
        console.log("Hi I am studying now." + this.major);
    }
}

let Jenny = new Student("Jenny", 26, 185, 90, "cs", 4);

console.log(Jenny.study());
console.log(Jenny);