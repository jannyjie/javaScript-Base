// 有時候可能需要提早離開函式就會需要用到 "return"

function checkScore(score){
    if(score < 0 || score > 100){
        window.alert('超過預算範圍');
        return;
    }
    else if(score >= 60){
        window.alert('及格');
    } else {
        window.alert('不及格');
    }
}

var score = window.prompt('請輸入數學分數', score);
checkScore(score);


// 也可回傳 多個值

function addsub(x, y){
    var add = x + y;
    var sub = x - y;
    return [add, sub];
}

var result = addsub(5, 3);

window.alert('5加3等於' + result[0] + ' ,5減3等於' + result[1]); // 5加3等於8 ,5減3等於2