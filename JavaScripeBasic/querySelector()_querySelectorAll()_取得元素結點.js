querySelector();
// 它會根據參數指定CSS 選擇器去取得符合的第一個元素, 傳回值一個 Element 若照不到就傳 null

{/* <div id="myDIV">
  <p class="demo">这是一个 div 中 class="demo" 的 p 元素。</p>
  <p class="demo">这也是一个 div 中 class="demo" 的 p 元素。</p>
</div> 
<p>点击按钮修改 div 元素中第一个 p 元素的文本内容。</p>
<button onclick="myFunction()">点我</button> 

*/}

function myFunction() {
    var x = document.getElementById("myDIV");
    x.querySelector(".demo").innerHTML = "Hello World!";
}


querySelectorAll();
// 它會根據參數指定CSS 選擇器去取得符合的所有元素, 這是 NodeList 集合, 若找不到就回傳空的 NodeList 

{/* <div>
  <h3>H3 元素</h3>
  <p>我是一个 p 元素，我的父元素是 div 元素。</p>
</div>

<div>
  <h3>H3 元素</h3>
  <p>我是一个 p 元素，我的父元素也是 div 元素。</p>
</div>

<p>点击按钮修改父元素为 div 的所有 p 元素的背景颜色。</p>

<button onclick="myFunction()">点我</button>

<p><strong>注意:</strong>Internet Explorer 8  及更早版本不支持 querySelectorAll() 方法。</p> */}

function myFunction() {
    var x = document.querySelectorAll("div > p");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}d

