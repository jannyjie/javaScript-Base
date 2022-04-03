// forEach 解決了什麼問題？
// 在陣列中，最常見的操作是撰寫迴圈，透過迴圈去把每個索引（index）的元素（item）取出來做運算，在一般迴圈的寫法如下。
// forEach 是這幾個陣列函式最單純的一個，不會額外回傳值，只單純執行每個陣列內的物件或值。

var array = [
    {name : '小明'},
    {name : '杰倫'},
    {name : '漂亮阿姨'},
    {name : '小美'},
]
  
array.forEach((item, index) => {
    item.id = index + 'a';
    console.log(  item);
});

// [[object Object] {
//     id: "0a",
//     name: "小明"
//   }, [object Object] {
//     id: "1a",
//     name: "杰倫"
//   }, [object Object] {
//     id: "2a",
//     name: "漂亮阿姨"
//   }, [object Object] {
//     id: "3a",
//     name: "小美"
//   }]