
// 閉包函數
var Person = function(name, birth){
    // Private屬性 私有成員
    var _name = name;
    var _birth = birth;
    // 可存取Private 屬性的特權方法
    this.getName = function() {
      return _name;
    }
    
    this.getBirth = function(){
      return _birth;
    }
  }
  
  Person.prototype.toString = function() {
    return 'Person:' + this.getName() + '' + this.getBirth();
  }
  
  var p = new Person('蔣宜潔', new Date());
  
  console.log(p.getName); 

//   function() {
//     return _name;
//   }
  
console.log(p.toString());
//   "Person:蔣宜潔Wed Apr 13 2022 23:03:41 GMT+0800 (GMT+08:00)"
  
console.log(p._name);
// undefined