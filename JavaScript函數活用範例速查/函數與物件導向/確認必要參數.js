// 如果必要的參數未被傳遞時，也應該由函數拋出例外的訊息

function getSquareArea(width, height){
    
    if(width === height){
        throw{name: 'ArgsMissing', message: '無法指定寬度'}
    }
    if(height === undefined){
        throw{name: 'ArgsMissing', message: '無法指定高度'}
    }
    // 拋出例外時就出現錯誤訊息
    try{
        console.log(getSquareArea());
    }catch{
        console.log(e.message);
    }
    return width * height;

}

// throw 命令可傳遞任何類型的值(也可是字串)，不過強烈建議至少是傳遞擁有name(例外的種類) / message屬性(錯誤訊息)
// 這是為了保持應用程式的一貫性，也比較容易在catch 區塊中撰寫發生例外處理。