// 我知道加總起來要得到最大值，就是小的跟小的在一起，大的跟大的再一起。所以首先要先排序 (很多題目都要先排序再做)，然後依序加起來。

var arrayPairSum = function (nums) {
    const arrSorting = nums.sort((a, b) => {
        return a - b
    });
    let sum = 0;
    for (i = 0; i < arrSorting.length; i += 2) {
        sum += arrSorting[i];
    }
    return sum;
}