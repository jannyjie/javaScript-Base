// 可以用來取得 / 設定目前元素的HTML內容, 當我們要取得元素的文字內容時, textContent 屬性會傳回目前元素和子孫元素的文字內容, 而innerHtmL 屬性會傳回目前元素的整個 HTML 內容

{/* <p id="engine"><em>Google</em>台灣</p> */}

var engine = document.getElementById('engine');
console.log(engine.textContent);
console.log(engine.innerHTML);



{/* <p id="engine1"></p>
<p id="engine2"></p> */}

var engine1 = document.getElementById('engine1');
var engine2 = document.getElementById('engine2');

engine1.textContent = '<em>Google</em>台灣';
engine2.innerHTML = '<em>Google</em>台灣';

{/* <em>Google</em>台灣

Google台灣 */}