var Util = function() {};

Util.VERSION = '1.0.0';

Util.getBmi = function(weight, height){
  return weight/ (height*height);
}

console.log(Util.VERSION);
console.log(Util.getBmi(45.5, 1.47))

// VERSION 之所以是大寫是因為要表示他是常數         