const arr = [1, 2, 3, 4];
const k = 2;

const arr2 = [2, 3, 4, 7, 11];
const k2 = 5;

const search = (arr, k) => {
    let newArray = [];
    let n = 1;
    let i = 0;

    while (true) {
        if (n == arr[i]) {
            n++;
            i++;
        }
        else {
            newArray.push(n);
            n++;
            if (newArray.length > k) {
                break;
            }
        }
    }
    return newArray[k - 1];
};
console.log(search(arr, k));


console.log(search(arr2, k2));

