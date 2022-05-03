var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let res = 0;
    for (let num of nums) {
        let sign = 1;
        (num === 0) ? sign = 0 : sign = 1
         
        max = sign * max + num;
        // update max result
        if (max > res) res = max;
    }
    return res;
};

///////////$Recycle.Bin
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let num of nums) {
        if (num === 1) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    max = Math.max(max, count);
    return max;
}

///////////////////$Recycle.Bin
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let res = 0;
    for (let num of nums) {
        let sign = 1;
        if (num === 0) { 
            sign = 0;
        } else {
            sign = 1;
        }
        max = sign * max + num;
        // update max result
        if (max > res) res = max;
    }
    return res;
};

/////////////////////////$Recycle.Bin
var findMaxConsecutiveOnes = function(nums) {
    nums.push(0)
    let result = []
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count += 1
        }
        if(nums[i] === 0){
            result.push(count)
            count = 0
        }
    }
    return Math.max(...result)
};