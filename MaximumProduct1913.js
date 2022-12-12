const maxProductDifference = (numbers) => {
    const numbers = [...numbers]
    const sortedNumber = numbers.sort((a, b) => a - b);
    const sortedNumber2 = numbers.sort((a, b) => b - a);
    console.log(sortedNumber, sortedNumber2);
    const result = (sortedNumber[sortedNumber.length - 2] * sortedNumber[sortedNumber.length - 1]) - (sortedNumber[0] * sortedNumber[1]);
    return result;
};
console.log(maxProductDifference([5, 6, 2, 7, 4]));

// var maxProductDifference = function (nums) {
//     let a = [...nums].sort((a, b) => a - b);
//     let b = [...nums].sort((a, b) => b - a);
//     console.log(a, b)
//     return b[0] * b[1] - a[0] * a[1];
// };
// console.log(maxProductDifference([5, 6, 2, 7, 4]));