{
    /* <p>這是段落一</p>
    <p id="the_id">這是段落二</p>
    <p class="my_class">這是段落三</p>
    <div class="my_class">這是 div 區塊</div> */
}
// 取得 所有 <p> 元素，會取得陣列格式
document.getElementsByTagName("p");

// 取得特定 id="the_id" 的元素，會取得單一物件
document.getElementById("the_id");

// 取得 class="my_class" 的所有元素，會取得陣列格式
document.getElementsByClassName("my_class");

// 取得 div 標籤且 class 有 test 的元素，只會取得第一個
document.querySelector("div.test");

// 取得 div 標籤且 class 有 test 的元素，會取得全部
document.querySelectorAll("div.test");


// 元素的內容
// <p > 這是段落一 < span > 其它 < /span></p >
// 取得元素
var el_p = document.getElementsByTagName("p")[0];
console.log(el_p.outerHTML); // <p>這是段落一<span>其它</span></p>
console.log(el_p.innerHTML); // 這是段落一<span>其它</span>
console.log(el_p.innerText); // 這是段落一其它

// 元素的屬性
// 透過.getAttribute()； 或者是「 點語法(dot syntax)」。
// <p id="para1" data-id="abcd1234">這是段落一</p>

var el_p = document.getElementById("para1");
console.log(el_p.getAttribute("data-id")); // abcd1234

console.log(el_p.getAttribute("id")); // para1
console.log(el_p.id); // para1