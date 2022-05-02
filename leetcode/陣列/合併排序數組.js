// Merge Sorted Array

// 參考氣泡排序 https://pjchender.blogspot.com/2017/09/bubble-sort.html

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var n = 3;
var m = 3;



var merge = function (nums1, m, nums2, n) {
    var index = 0;
    for (var i = m; i < m + n; i++) {
        nums1[i] = nums2[index];
        index++;
        console.log(nums1)
    }
    for (var j = 0; j < nums1.length - 1; j++) {
        for (var k = j + 1; k < nums1.length; k++) {
            if (nums1[j] > nums1[k]) {
                var temp = nums1[j];
                nums1[j] = nums1[k];
                nums1[k] = temp;
            }
        }
    }
    return nums1;
};

console.log(merge(nums1, m, nums2, n));


////////////////////////$Recycle.Bin
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
// console.log(bubbleSort([20, 20, 31, 56, 1, 12, 12]))
// console.log(bubbleSort([3, -9, -12, -1, 8]))