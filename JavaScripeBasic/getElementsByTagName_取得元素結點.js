// 它會根據參數指定的標籤名稱去取得符合的元素, 傳回值是一個 HTMLCollection 集合

// > length // 這個屬於表示 NodeList 集合的元素個數
// > item  //  這個方法用來取得第 i + 1 個元素, i 的值為0 ~ lenght - 1

{/* <ul>
  <li id="one" class="dessert">珠寶盒</li>
  <li id="two" class="dessert">法朋</li>
  <li id="three" class="dessert">Lady</li>
  <li id="four">RWD</li>
</ul> */}


var foods = document.getElementsByTagName('li');

for(var i = 0; i < foods.length; i++){
    console.log(foods.item(i).textContent);
}

// "珠寶盒"
// "法朋"
// "Lady"
// "RWD"