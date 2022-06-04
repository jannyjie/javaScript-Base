// 時間函數

var time = 10

function countDown(){
    console.log("倒數" + time + "秒");
    time -= 1;
    if(time <= 0){
        clearInterval(timer)
    }
}

var timer = setInterval(countDown, 1000)