// 如果必要的參數未被傳遞時，也應該由函數拋出例外的訊息

function getSquareArea(width, height){
    if(width === undefined){
        throw {name: 'janny', message: '無法指定寬度'};
    }
    if(height === undefined){
        throw {name: 'janny', message: '無法指定高度'};
    };
    
    return width * height;
}

try{
    console.log(getSquareArea()) // "無法指定寬度"
    console.log(getSquareArea(10,5)) // 50
}catch(e){
    console.log(e.message);
}

// throw 命令可傳遞任何類型的值(也可是字串)，不過強烈建議至少是傳遞擁有name(例外的種類) / message屬性(錯誤訊息)
// 這是為了保持應用程式的一貫性，也比較容易在catch 區塊中撰寫發生例外處理。