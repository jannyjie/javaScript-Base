function bubbleSort(arr) { 
    for (var i = arr.length - 1; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) { // 如果順序不對，交換
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 提申效能
function bubbleSort(arr) { 
    for (var i = arr.length - 1; i >= 1; i--) {
        let swap = false; // 加設沒有交換發生
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) { // 如果順序不對，交換
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true; // 紀錄已經發生交換
            }
        }
        if(!swap){ // 發現一整輪中都沒有交換發生，直接判定排序完成
            break;
        }
    }
    return arr;
}

var data = [2, 10, -1, 99]
console.log(bubbleSort(data))

////////// https://pjchender.blogspot.com/2017/09/bubble-sort.html
function bubbleSort(arr) {
    let toIndex = arr.length

    while (toIndex > 1) {
        toIndex--
        for (let i = 0; i < toIndex; i++) {
            // 如果前面的元素比後面的元素要大，則交換元素位置
            if (arr[i] > arr[i + 1]) {
                let tempValue = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tempValue
            }
        }
    }
    return arr
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]))

/////////////////////$Recycle.Bin
function bubbleSort(arr) {

    const n = arr.length; // 1
    // 2
    for (let i = 0; i < n - 1; i++) {
        // 3
        for (let j = 0; j < n - 1 - i; j++) {
            // 4
            if (arr[j] > arr[j + 1]) {
                // 5
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 2, 1, 4]))