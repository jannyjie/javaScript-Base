//  Find Numbers with Even Number of Digits
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let num = [];
    for (var i = 0; i < nums.length; i++) {
        let a = String(nums[i]).split('');
        if ((a.length % 2) === 0) {
            num.push(nums[i]);
        }
    }
    return num.length;
};

