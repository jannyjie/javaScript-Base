// Break
// break 敘述， 是用來「跳出」迴圈用的，繼續執行迴圈之後的 JavaScript 程式。
// 遇到空就跳出
var data = ['測量', '揉捏', '整圈', '', '擠出空間', '塑形', '烘烤'];

for(var i = 0; i < data.length; i++){
    if(data[i] === "") {break;}
    console.log(data[i]); 
    // "測量"
    // "揉捏"
    // "整圈"
}

// 假設不想完全脫離只要遇到空白時自動跳過
var dataA = ['測量', '揉捏', '整圈', '', '擠出空間', '塑形', '烘烤'];

for(var i = 0; i < dataA.length; i++){
    if(dataA[i] === "") {continue;}
    console.log(dataA[i]);
    // "測量"
    // "揉捏"
    // "整圈"
    // "擠出空間"
    // "塑形"
    // "烘烤"
}

var i=0;
while (i>=0) {
    i++;
    document.write(i+"</br>");
    if (i==7){
        break;    
    }
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 只要當 i 的值等於 7 時，即將會從該迴圈跳出。

// Continue
// Continue 敘述，僅在迴圈內中斷程式的執行，在中斷後又重新執行迴圈，而不會跳出迴圈。

var i=0;
while (i<=10) {
    i++;
    if (i==7){
        continue;     
    }
    document.write(i+"</br>"); 
}

// 1
// 2
// 3
// 4
// 5
// 6
// 8
// 9
// 10
// 11

// 一次脫離/ 跳過多個階層
var dataB = [
    ['綠茶', '咖啡'],
    ['御飯糰', '三明治'],
    ['馬鈴薯燉肉', '炸雞'],
    ['包子', '蛋糕'],
];
nest:
for(var i = 0; i < dataB.length; i++){
    var tmp = dataB[i];
    for(var j = 0; j < tmp.length; j++){
        if(tmp[j] === '炸雞') {break nest;}
        console.log(tmp[j]);
    }
    console.log('--------------------');
}
// "綠茶"
// "咖啡"
// "--------------------"
// "御飯糰"
// "三明治"
// "--------------------"
// "馬鈴薯燉肉"

var dataB = [
    ['綠茶', '咖啡'],
    ['御飯糰', '三明治'],
    ['馬鈴薯燉肉', '炸雞'],
    ['包子', '蛋糕'],
];

for(var i = 0; i < dataB.length; i++){
    var tmp = dataB[i];
    for(var j = 0; j < tmp.length; j++){
        if(tmp[j] === '炸雞') {continue;}
        console.log(tmp[j]);
    }
    console.log('--------------------');
}

// "綠茶"
// "咖啡"
// "--------------------"
// "御飯糰"
// "三明治"
// "--------------------"
// "馬鈴薯燉肉"
// "--------------------"
// "包子"
// "蛋糕"
// "--------------------"