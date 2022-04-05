// array.forEach(): 與 map() 有點相似，但結果不太相同，map()目的是巡覽每筆資料做處理並回傳一組新陣列，forEach 則是巡覽每筆資料再用資料去做其他事，它不會回傳值，功能類似 for 迴圈，只是一定會跑遍每筆資料的概念。
// https://kakadodo.github.io/2018/04/12/js-about-javascript-array-2/
var friends = ['Tom', 'Mary', 'Ben'];
friends.forEach(function(value, index){
  console.log(value + ' Wake up!!');
});
//結果出現三行 "Tom Wake up!!", "Mary Wake up!!", "Ben Wake up!!"，原本的 friends 陣列不會有變化
//Wake up 根本在對現在的自己說吧XD