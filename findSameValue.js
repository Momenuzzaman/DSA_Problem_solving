const array = [1, 2, 3, 4, 1, 5, 7, 6, 1, 1, 9];
const target = 1;
let count = [];
const search = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number === target) {
            count.push(number);
        }
    }
    return count.length;
};
console.log(search(array, target));