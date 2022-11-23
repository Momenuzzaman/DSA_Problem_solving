const array = [1, 2, 3, 4, 1, 5, 7, 6, 1, 1, 9, 1];
const target = 1;

const search = (numbers, target) => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number === target) {
            count += 1;
        }
    }
    return count;
};
console.log(search(array, target));