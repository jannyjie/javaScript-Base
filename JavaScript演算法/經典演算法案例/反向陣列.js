const array1 = [1 , 2,3,4];

const a = array1.reverse()

console.log(a)

///User Manual
Array.prototype.reverse2 = function () {
    let result = []
    for(let i = this.length-1; i >= 0; i-- ){
      result.push(this[i])
    }
    return result;
  }
  
  let arr = ["hi", 42, NaN, "moi", undefined]
  arr.reverse2(); // [undefined, "moi", NaN, 42, "hi"]

//User Manual
// 字串也可以反轉
// 如果是要把一個字串反轉，就要先把字串拆解成陣列，反轉後再把陣列轉成字串就可以了。像是這樣：
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello"); // "olleh"

// 原生就可以辦到
// 以上的效果其實也可以只用原生的 JavaScript 
// 就可以辦到，且過程不會很複雜，只要預設一個空字串，把拆解下來的字母接起來：

function reverseString (str) {
    let result = ''
    for(let i = str.length-1; i >= 0; i-- ){
      result+= str[i]
    }
    return result;
  }
  
  let str2 = "Hello";
  reverseString (str2); // "olleH"