function Person(name, age, height, weight){
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
}

Person.prototype.sayHi = function(){
    console.log(this.name + 'says Hi !!');
}

let Wilson = new Person("Wilson Ren", 25, 179, 75);
let Mike = new Person("Mike", 26, 185, 90);

Wilson.sayHi();
Mike.sayHi();