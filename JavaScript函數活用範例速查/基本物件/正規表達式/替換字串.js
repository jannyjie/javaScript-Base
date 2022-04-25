var str = 'Twas the night before Xmas...';
var newstr = str.replace(/Twas the night before/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...


var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John


//下面的例子用來獲取url的兩個引數，並返回urlRewrite之前的真實Url
var reg=new RegExp("(http://www.qidian.com/BookReader/)(\\d ),(\\d ).aspx","gmi");
var url="http://www.qidian.com/BookReader/1017141,20361055.aspx";
//方式一,最簡單常用的方式
var rep=url.replace(reg,"$1ShowBook.aspx?bookId=$2&chapterId=$3");
console.log(rep); // "http://www.qidian.com/BookReader/1017141,20361055.aspx"

var str="aa ////" 
str=str + "bb aa cc ////" 
str=str + "dd ff aa vv//" 

document.write(str.replace(/aa/g, "123"))  // 123 ////bb 123 cc ////dd ff 123 vv//

// 您可以使用本例提供的程式碼來確保匹配字串大寫字元的正確： 
text = "javascript Tutorial"; 
text.replace(/javascript/i, "JavaScript");   // JavaScript Tutorial

document.write(text.replace(/javascript/i, "JavaScript")) 

//在本例中，我們將把所有的花引號替換為直引號： 
name = '"a", "b"'; 
document.write(name.replace(/"([^"]*)"/g, "'$1'"))  // 'a', 'b'

// 我們將把字串中所有單詞的首字母都轉換為大寫
name = 'aaa bbb ccc'; 
var uw=name.replace(/\b\w+\b/g, function(word){ 
  return word.substring(0,1).toUpperCase()+word.substring(1);} 
); 

document.write(uw) 


//我們將把字串中所有單詞的首字母都轉換為大寫： 
var str="fsaf$a$assdfdasfa$a$dsfadsf"; 
var strr='\$'+'a'+'\$'; 
var name = '"a", "b"'; 
var reger=new RegExp("[\$]a[\$]","gm"); 


document.write(str.replace(reger,'==/123\=='))