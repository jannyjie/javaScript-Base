// 若我們預期某些程式碼可能會發生錯誤, 那麼可以自行拋出例外, 然後進行例外處理, 然後進行例外處理,
// 這會比等直譯器發現錯誤才突然終止程式來的好, 可以使用 throw 指令拋出例外

// throw new Error( 錯誤訊息 )

var radius = window.prompt('請輸入圓半徑');

try{
    var circleArea = Math.PI * radius * radius ;
    // Number.isNaN()方法如果傳遞的值為Nan且為數字類型，則返回true，否則返回false。
    if(!Number.isNaN(circleArea)){
        document.write('圓型面積為' + circleArea);
    }else {
        throw new Error('無法計算圓形面積');
    }
} catch(e){
    document.write(e.name + '<br>' + e.message);
} finally {
    document.write('<br> 程式執行完畢 !!');
}