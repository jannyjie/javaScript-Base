var Wings = Wings || {}; // 定義一個Wings的空間
// 新增經泰成員的方式[命名空間/類別=~]的語法對命名空間定義新的建構式，就對Wings命名間定義的Person類別
Wings.Person = function(name, birth){
  this.name = name;
  this.birth = birth;
}

Wings.Person.prototype.toString = function(){
  return this.name + '__'+this.birth;
}

// 要替命名空間底下的類別建立體得使用完全描述名稱
var p  = new Wings.Person('Janny', new Date(1955, 11,4));

console.log(p.toString())