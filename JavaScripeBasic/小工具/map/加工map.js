// array.map(): 結果會回傳一組新陣列而不影響原本內容，很常用來將資料轉換成新的組合方式，有點像加工食品機的概念(?)。
var friends = ['Tom', 'Mary', 'Ben'];
var friendsData = friends.map(function(value, index){
  if(value == 'Mary'){
    return value + ' is female.';
  }else{
    return value + ' is male.';
  }
});
console.log(friends, friendsData)
//friends結果: ["Tom", "Mary", "Ben"]
//friendsData結果: ["Tom is male.", "Mary is female.", "Ben is male."]