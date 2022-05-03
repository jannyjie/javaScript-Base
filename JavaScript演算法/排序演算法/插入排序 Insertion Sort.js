function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] - arr[j + 1]) { // 如果順序不對
                [arr[j], arr[j + 1]] = [arr[j + 1] = arr[j]]; // 交換
            } else {
                break; // 任何一次以較，發現順序對了，這一輪就不用繼續了
            }
        }
    }
}


const insertionSort = (arr) => {
    const n = arr.length;

    // 假設第一個元素已經排好，所以從 1 開始跑
    for (let i = 1; i < n; i++) {

        // position 表示可以插入的位置
        let position = i;

        // 先把要插入的元素存起來
        const value = arr[i];

        // 開始往前找，只要符合這條件就代表這個位置是可以插入的
        // 邊找的時候就可以邊把元素往後挪，騰出空間
        while (i >= 0 && arr[position - 1] > value) {
            [arr[position], arr[position - 1]] = [arr[position - 1], arr[position]];
            position--;
        }

        // 找到適合的位置，放入元素
        arr[position] = value;
    }
    return arr;
}