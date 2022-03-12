// 若要取得穩文字內容, 可以使用 textContent / innerText / innerHTML 

// textConent
// textConent 可以用來取得/ 設定目前元素和子孫元素的文字內容
{/* <ul>
  <li id="one" class="dessert">珠寶盒</li>
  <li id="two" class="dessert">法朋</li>
  <li id="three" class="dessert">Lady</li>
  <li id="four">RWD</li>
</ul>  */}

var item = document.getElementById('one');

console.log(item);
document.write('項目: '+ item.textContent);


// 02

{/* <p id="msg"></p> */}

var msg = document.getElementById('msg');
var name = window.prompt('請輸入名子');
msg.textContent = name + '您好!';


