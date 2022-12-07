const getConcatenation = (nums) => {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
        if (nums.length === ans.length) {
            for (let j = 0; j < nums.length; j++) {
                ans.push(ans[j]);
            }
        }
    }
    return ans;
};

console.log(getConcatenation([1, 2, 1]));

const getConcatenation2 = (nums) => {
    return nums.concat(nums);
};
console.log(getConcatenation2([1, 2, 1]));
