var missingNumber = function (nums) {
    let sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i <= sorted.length; i++) {
        if (sorted[i] !== i) {
            return i;
        }
    }
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));