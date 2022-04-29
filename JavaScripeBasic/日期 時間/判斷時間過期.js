var aa = '2019-03-22';
var data = new Date(aa);

data.getTime() < Date.now() ? console.log(1) : console.log(2);



var aa = '2022-05-22';
function judgeTime(time){
    var strtime = time.replace("/-/g", "/");//時間轉換
    //時間
    var date1=new Date(strtime);
    //現在時間
    var date2=new Date();
    //判斷時間是否過期
    return date1 < date2 ? true : false;
}


console.log( judgeTime(aa))