// 往內層找

// .querySelector() 與 .querySelectorAll()
// 往內層找元素，回傳的會是 NodeList，可以使用 .forEach() 函式。

// <p class="para">段落一</p>
// <p class="para">段落二</p>

// <div id="my_block">
//   <h1>h1 標題</h1>
//   <ul>
//     <li><a href="#" class="link">連結二</a></li>
//     <li><a href="#" class="link">連結三</a></li>
//     <li><a href="#" class="link">連結四</a></li>
//   </ul>
//   <a href="#" class="link">連結一</a>
// </div>

// <p class="para">段落三</p>
// <p class="para">段落四</p>

var my_block = document.getElementById("my_block");
var sub_all_nodes = my_block.querySelectorAll("a.link");
console.log(sub_all_nodes); // NodeList 陣列

// .children
// 找到第一層的子元素。 回傳的會是 HTMLCollection， 無法使用.forEach() 函式。
var my_block = document.getElementById("my_block");

var children_nodes = my_block.children;

console.log(children_nodes); // HTMLCollection，無法使用 forEach

for (let i = 0; i < children_nodes.length; i++) {
    //console.log(i);
    children_nodes[i].classList.add("add_border");
}


// .firstElementChild 與 lastElementChild
// 找到第一個子元素、找到最後一個子元素。
var my_block = document.getElementById("my_block");

var first_child = my_block.firstElementChild;
first_child.classList.add("add_border");

var last_child = my_block.lastElementChild;
last_child.classList.add("add_border");

// 找第 n 個子元素
// 透過 querySelector 往內層找，以及使用 :nth-child()：
var my_block = document.getElementById("my_block");
var nth_child = my_block.querySelector("ul.my_list > li:nth-child(2)");

// 往同層找

// .previousElementSibling
// 找到同層的前一個元素。

var my_block = document.getElementById("my_block");

var previous_child = my_block.previousElementSibling;
previous_child.classList.add("add_border");

// .nextElementSibling

var my_block = document.getElementById("my_block");

var next_sibling = my_block.nextElementSibling;
next_sibling.classList.add("add_border");

// 往父層找
// .parentElement
// 找到最近的父元素。
var my_block = document.getElementById("my_block");

var nth_child = my_block.querySelector("ul.my_list > li:nth-child(2)");
nth_child.parentElement.classList.add("add_border");

// .closest()
// 往父層找， 找到指定的元素。
var my_block = document.getElementById("my_block");

var the_parent_el = my_block.querySelector("ul.my_list > li:nth-child(2)").closest("div#my_block");
the_parent_el.classList.add("add_border");