let Wilson = {
    name: 'Wilson Ren',
    age: 25
}

function getAge(){
    console.log(this); // 這時候的this 是指 window
    console.log(this.age);
}

let getAgeBind = getAge.bind(Wilson); // 透過這個bind 綁定這個物件指向\
getAgeBind();

// call

function Person(name, age, height, weight){
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
}

Person.prototype.sayHI = function(){
    console.log(this.name+"says hi");
}

function Student(name, age, height, weight, major, grade){
    Person.call(this, name, age, height, weight);
    this.major = major,
    this.grade = grade
}

let WilsonPerson = new Student("Wilson Ren", 25, 179, 75, "cs", 3.86);

console.log(WilsonPerson); // Call 只會執行 object 所以 person 的 function 不會執行