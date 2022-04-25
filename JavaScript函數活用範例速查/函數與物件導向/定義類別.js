var Ainmal = function(name){
    this.name = name;
    this.toString = function(){
        return 'Ainmal' + this.name;
    }
}

var ani = new Ainmal('janny');
console.log(ani.name); // "janny"

console.log(ani.toString()); // "Ainmaljanny"

// 名稱應以大寫英文字母為首
// 為了與一般的函數區分，建議讓建構式的名稱以大寫英應為字母為首，並且也要能一眼就能看出

// 屬性可利用{ this.屬性名稱 } 定義
// 建構式底下的this就是類別的實體，所以要對實體新增屬性時，只需要對this這個保留字設定變數。以這次的範例而言，我們定義了name屬性。

// 類別的方法是函數型的屬性
// 嚴格來說，JavaScript 沒有所謂的方法，值為函數物件的屬性可當成方法使用。例如這次的範例就是將函數物件只給toString屬性。換言之，就是透過這個方式{toString}方法

// 不需要回傳值
// 建構式會自動回傳指向THIS的物件，所以不需要回傳值。若真的需要回傳值，其回傳值就是new 運算子的值。此時要注意的是，對this 設定的屬性將全部被忽略。