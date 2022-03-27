const A = [1, 2, 3, 4]
var sortArrayByParity = function (A) {
    // 先處理極限值
    if (A.length < 2) {
        return A
    }
    // 把想法變成程式碼實踐
    let temp = []
    A.forEach(function item(item) {
        //  item 除以 2 等於 0 的話，該項 item 擺在 array 的最前面 : 不是的話擺在最後面
        item % 2 == 0 ? temp.unshift(item) : temp.push(item)
    })
    return temp
}

console.log(sortArrayByParity(A))
document.querySelector("#demo").innerHTML = sortArrayByParity(A)