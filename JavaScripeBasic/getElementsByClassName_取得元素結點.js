// 根據類別名稱取得元素

{/* <ul>
  <li id="one" class="dessert">珠寶盒</li>
  <li id="two" class="dessert">法朋</li>
  <li id="three" class="dessert">Lady</li>
  <li id="four">RWD</li>
</ul> */}

var foods = document.getElementsByClassName('dessert');

for(var i = 0; i < foods.length; i++){
  console.log(foods.item(i).textContent);
}

// "珠寶盒"
// "法朋"
// "Lady"