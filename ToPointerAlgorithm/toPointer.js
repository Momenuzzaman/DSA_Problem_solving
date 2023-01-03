const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const toPointer = (array) => {
    let size = array.length - 1;
    let tem;
    for (let i = 0, k = size; i <= k; i++, k--) {
        tem = array[i];
        array[i] = array[k];
        array[k] = tem;
    }
    return array;
};

console.log(toPointer(array));