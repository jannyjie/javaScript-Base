var Person = function() {};

Person.prototype = {
  eat: function() {console.log('嚼嚼、嚼嚼');}
}

var BusinessPerson = function(){};

BusinessPerson.prototype = new Person();
BusinessPerson.prototype.work = function(){console.log('11/11')};

var bp = new BusinessPerson();

bp.eat(); // "嚼嚼、嚼嚼"
bp.work(); // "11/11"

// 這次要將父類別的實體指定給子類別的prototype屬性。

