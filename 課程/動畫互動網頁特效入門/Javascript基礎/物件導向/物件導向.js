var Person = function(name, gender){
    this.name = name;
    this.gender = gender;
    this.greeting = function(){
        console.log("Hello" + this.name);
    }
}

var person1 = new Person("jenny", "male")

console.log(person1.greeting());
// Hellojenny
// undefined