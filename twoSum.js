const nums = [3, 2, 4];
let target = 6;
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum(nums, target));
