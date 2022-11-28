// const isPerfectSquare = (num) => {
//     return (num ** (1 / 2) % 1) === 0;
// };
// console.log(isPerfectSquare(16));

const isPerfectSquare = (num) => {
    return Number.isInteger(Math.sqrt(num));
};
console.log(isPerfectSquare(25));