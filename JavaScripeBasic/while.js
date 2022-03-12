// while 會先檢查條件是否成立若不成立作為迴圈的依據只要條件成立就會繼續執行迴圈又稱為 "條件式迴圈"
var number = prompt('請輸入 1-10的數字');

while(number != 6){
 if(number > 6){
    window.alert('太大重新輸入');
 } else if ( number < 6 ) {
    window.alert('太小重新輸入');
 }
}

window.alert('答對')