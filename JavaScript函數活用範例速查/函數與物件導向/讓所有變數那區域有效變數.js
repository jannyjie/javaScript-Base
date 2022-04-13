(function(){
    var data = 108;
    console.log(data); // 108
  }).call(this);// 當場執行
  
  
  cpnsole.log(data); // 無法從函數外參照函數內的變數


// call(this)
// 即時函數降算只寫成 [fucntion(){...}.call();](省略this)也一樣能執行。但有時候卻會因為執行環境而產生莫名的錯誤。