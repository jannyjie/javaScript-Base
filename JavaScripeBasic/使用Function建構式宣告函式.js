// new function (參數1, 參數2, ..., 函式主體);

//new 運算子用來根據指定的型別建立物件,此處所要建立的function物件, new 運算子可以省略不寫

var sum = new Function('a', 'b', 'return a + b');

window.alert(sum(20, 20)); // 40