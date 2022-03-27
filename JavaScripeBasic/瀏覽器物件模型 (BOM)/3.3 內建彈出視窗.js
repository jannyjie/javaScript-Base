alert();

alert("這是訊息視窗。");

confirm();
// 跳出一個詢息詢問視窗，讓使用者按下「OK」或「Cancel」，然後會回傳 true 或 false，語法：
var is_confirm = confirm("是否確定要執行？");

var my_btn = document.getElementById("btn");
my_btn.addEventListener("click", function () {

    var is_confirm = confirm("是否確定要執行？");
    if (is_confirm) {
        alert("按下了 OK");
    } else {
        alert("按下了 Cancel");
    }

});