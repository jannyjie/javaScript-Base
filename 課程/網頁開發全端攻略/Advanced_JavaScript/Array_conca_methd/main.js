var frinend1 = ["mike", "josh"];
var frinend2 = ["Jenny", "Jack"];

var frinends = frinend1.concat(frinend2)

console.log(frinends); //["mike", "josh", "Jenny", "Jack"]

var aa = [...frinend1, ...frinend2 ]
console.log(aa); //["mike", "josh", "Jenny", "Jack"]