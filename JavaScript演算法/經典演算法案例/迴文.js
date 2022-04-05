// 迴文試紙左唸到右由右唸到左，字母拍裂順序都一樣

// 01
const isPalindrome = str => str.split("").every((ch, index) => ch === str[str.length - 1 - index]);
console.log(isPalindrome('人2人愛我，我愛人人')) //true

// 02
function palindrome(str) {
    //去掉字串多餘的標點符號和空格
    str = str.replace(/[\ |\~|`|\!|\@|\#|\$|\%|\^|\&|\*||||\-|\_|\+|\=|\||\||||\{|\(|\)|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
    //把字元全部變為小寫
    var lower_str = str.toLowerCase();
    //變為字串陣列
    var arr = lower_str.split("");
    //獲得字元翻轉後的字串陣列
    var reverse_arr = arr.reverse();
    //在JavaScript中，兩個陣列是無法進行比較的，而兩個字串可以進行比較。所以，我們將反轉後的陣列再次轉換成字串
    var reverse_str = reverse_arr.join("");
    //判斷兩個字串是否相等
    if(lower_str == reverse_str){
        return true;
    }
    return false;
    }
    
console.log(palindrome('asdfghj,jhgfdsa')) // true


// 03
function palindrome(str) {                       // "Hello there"
    str.toLowerCase();                               // "hello there"
    str = str.replace(/\s/g, "");                    // "hellothere"
    var a = str;                             
    a = a.split("").reverse().join("");                  // a = "erehtolleh"
    return (str === a);                             // "hellothere" == "erehtolleh"
}


alert(palindrome("malayalam"));