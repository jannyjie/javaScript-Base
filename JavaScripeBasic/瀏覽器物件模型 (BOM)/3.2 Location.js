// 取得網址參數的資訊
{
    /* <button type="button" id="btn4">取得網址參數資訊</button> */
}

var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {

    var search_obj = new URLSearchParams(location.search);
    console.log(search_obj.get("a")); // value1

});