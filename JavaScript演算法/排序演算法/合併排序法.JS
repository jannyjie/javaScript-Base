// 接著要進入到比較快的排序法了，合併排序法算是滿好理解的一個：
// 切一半，排好左邊，排好右邊，合併
// 談合併排序法的時候我喜歡先談合併這個步驟，其實就是把兩個各自排序好的陣列合併成一個。這一步其實也滿簡單，因為兩邊都已經排序好了嘛，所以就是不斷看兩邊的第一個元素，誰小就抓誰下來，接著左邊抓完就抓右邊，反之亦然。

const simpleMergeSort = (arr) => {

    // 合併
    const merge = (leftArray, rightArray) => {
        let result = [];
        let nowIndex = 0,
            left = 0,
            right = 0;
        const leftLength = leftArray.length;
        const rightLength = rightArray.length;

        // 如果左右兩邊都沒抓完，就看誰比較小抓誰
        while (left < leftLength && right < rightLength) {
            if (leftArray[left] < rightArray[right]) {
                result[nowIndex++] = leftArray[left++];
            } else {
                result[nowIndex++] = rightArray[right++];
            }
        }

        // 跑到這裡代表左右兩邊其中一邊抓完了
        // 如果是左邊沒抓完，全部抓下來
        while (left < leftLength) {
            result[nowIndex++] = leftArray[left++];
        }

        // 右邊沒抓完，全部抓下來
        while (right < rightLength) {
            result[nowIndex++] = rightArray[right++];
        }

        // 把合併好的陣列直接傳回去
        return result;
    }
    const _mergeSort = (arr) => {
        const length = arr.length;
        if (length <= 1) return arr;

        // 切兩半
        const middle = Math.floor(length / 2);

        // 排左邊
        const leftArray = _mergeSort(arr.slice(0, middle));

        // 排右邊
        const rightArray = _mergeSort(arr.slice(middle, length));

        // 合併後丟回去
        return merge(leftArray, rightArray);
    }
    return _mergeSort(arr);
}