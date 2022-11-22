const arr = [2, 1, 10, 14, 34, 32, 45, 3];
const target = 45;

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return 'find target ' + i;
        }
    }
    return 'Not found';
};

console.log(linearSearch(arr, target));

