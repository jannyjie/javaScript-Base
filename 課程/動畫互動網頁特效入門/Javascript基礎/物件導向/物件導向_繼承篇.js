console.clear();

var Person = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.getHtml = function() {
    return `
        <h3>${this.name}</h3>
        <hp>${this.age}</hp>
    `
}

Person.prototype.sayHello = function(){
    console.log("Hello"+ ',' + this.name);
}

var Mary = new Person("Jenny", 30)
Mary.sayHello()
// Hello,Jenny

Mary.getHtml()
{/* <h3>Jenny</h3>
<hp>30</hp> */}
    