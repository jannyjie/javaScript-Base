function max(aa){
    var result = Number.NEGATIVE_INFINITY;
    for(var i = 0; arguments.length; i++){
        if(result < arguments[i]){
            result = arguments[i];
        }
    }
    return result;
}

console.log(max(15,78,42,63,12)) // 78

// 固定參數與可變長度參數同時出現
function sprintf(format){
    for(var i =1; arguments.length; i++){
        var patterm = new RegExp('\\{'+(i-1)+'}', 'g');
        format = format.replace(patterm, arguments[i]);
    }
    return format;
}

console.log(sprintf('{1}, {0}', 'aa', 'bb'))