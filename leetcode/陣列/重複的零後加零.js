//   Duplicate Zeros

var arr = [1, 0, 2, 3, 0, 4, 5, 0];

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    var i = 0;
    var len = arr.length
    while (i < arr.length) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            i++
        }
        i++;
        arr.length = len
    }
}
console.log(duplicateZeros(arr));


////////////$Recycle.Bin
const duplicateZeros = (arr) => {
    const length = arr.length
    arr.map(item => {
        arr.push(item)
        if (item === 0) {
            arr.push(0)
        }
    })
    arr.splice(0, length);
    arr.splice(length);
}

const duplicateZeros = (arr) => {
    const length = arr.length
    arr.map(item => { arr.push(item) (item === 0);  {arr.push(0)}})
    arr.splice(0, length);
    arr.splice(length);
}

//////////$Recycle.Bin
const duplicateZeros = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            i++
            arr.pop()
        }
    }
}

////////////////最大連續值_Max Consecutive Ones.js

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = arr => {
    let tmp = []

    for (let i = 0; i < arr.length; i++) {
        if (tmp.length) {
            tmp.unshift(arr[i])
            arr[i] = tmp.pop()
        }

        if (arr[i] === 0 && i + 1 <= arr.length - 1) {
            tmp.unshift(arr[i + 1])
            arr[i + 1] = 0
            i++
        }
    }
}