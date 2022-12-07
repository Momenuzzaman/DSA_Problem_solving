let factorialMemo = [];

const factorial = (number) => {
    if (factorialMemo[number]) {
        return factorialMemo[number];
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return factorialMemo[number] = result;
};


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    console.log(factorial(array[i]));
}
(factorial(array));