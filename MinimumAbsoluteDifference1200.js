var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];
    let list = [];
    for (let i = 1; i < arr.length - 1; i++) {
        diff = Math.min(diff, arr[i + 1] - arr[i]);
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === diff) {
            list.push([arr[i - 1], arr[i]]);
        }
    }
    return list;
};

console.log(minimumAbsDifference([4, 2, 1, 3]))
console.log(minimumAbsDifference([1, 3, 6, 10, 15]))
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))