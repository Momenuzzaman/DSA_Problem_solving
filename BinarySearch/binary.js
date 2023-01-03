const arr = [3, 2, 5, 6, 4, 8, 21, 7, 9, 10, 20, 11];
const sortArr = arr.sort((a, b) => a - b);
console.log(sortArr);

let start = 0;
let end = sortArr.length - 1;
const target = 9;

const binary = (arr, target) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return 'find index ' + mid;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return 'not found';
};

console.log(binary(sortArr, target));
