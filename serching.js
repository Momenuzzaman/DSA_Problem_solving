const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const target = 9;

const searching = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    let mid;
    let ascending;
    if (numbers[start] < numbers[end]) {
        ascending = true;
    }
    else {
        ascending = false;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (numbers[mid] == target) {
            return mid;
        }
        if (ascending) {
            if (numbers[mid] < target) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
        else {
            if (numbers[mid] > target) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return 'note found';
};

console.log(searching(numbers, target));