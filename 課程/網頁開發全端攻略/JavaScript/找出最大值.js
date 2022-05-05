function findBiggest(arr) {
    if (arr == '') return 'undefined';
    return Math.max(...arr);
}

console.log(findBiggest([15, 20, 22, 16, 7]));
console.log(findBiggest([1, 2, 3, 4, 5, 999]))
console.log(findBiggest([-11, 0, -3, -4, -5, -999]))
console.log(findBiggest([]))


///////////////$Recycle.Bin
/*
破解思路，用兩個步驟
1.判斷是否為空陣列
2.若非則進行最大判斷
*/

//最大判斷的函數
function Max(nums) {
    let b = nums[0];
    for (i = 1; i < nums.length; i++) {
        if (nums[i] > b) {
            b = nums[i];
        }
    }
    return b;
}

//這個函數包含空陣列的情況

function findBiggest(nums) {
    if (nums = []) {
        return undefined;
    } else {
        Max(nums);
    }
}

console.log(Max(numbers));


/////////////////$Recycle.Bin
function findBiggest(arr) {
    if (arr.length == 0) {
        return console.log("undefined");
    } else {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (max <= arr[i]) {
                max = arr[i];
            }
        }
        return console.log("The biggest number is " + max);
    }
}
findBiggest([15, 20, 22, 16, 7]); // return 22
findBiggest([1, 2, 3, 4, 5, 999]); // return 999
findBiggest([-11, 0, -3, -4, -5, -999]); // return 0
findBiggest([]); // return undefined