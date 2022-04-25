function getSquareArea(width, height){
    if(width === undefined){
        width = 1
    }
    if(height === undefined){
        height = 2
    };
    
    return width * height;
}

console.log(getSquareArea()) // 2
console.log(getSquareArea(10,5)) // 50
console.log(getSquareArea(10)) // 20