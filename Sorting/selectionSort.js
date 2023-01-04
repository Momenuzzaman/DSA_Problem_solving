const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        // find minimum index
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // swap
        let tem = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tem;
    }
    return array;
};
console.log(selectionSort([10, 13, 23, 16, 1, 92, 6]));