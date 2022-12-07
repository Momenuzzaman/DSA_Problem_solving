
const kidWithCandies = function (candies, extraCandies) {
    let ans = Array(candies.length).fill(false);
    let max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) ans[i] = true;
    }
    return ans;
};
console.log(kidWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidWithCandies([12, 1, 12], 10));