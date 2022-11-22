const array = [10, 20, 30, 40, 50, 60, 70];
const target = 55;

const search = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return mid + 1;
};

console.log(search(array, target));