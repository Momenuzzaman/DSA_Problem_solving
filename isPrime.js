const isPrime = (number) => {
    if (number == 1) return true;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            count++;
        }
    }
    if (count == 2) return true;
    else return false;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrimeArray = (array) => {
    let countBoolean = [];
    for (let i = 0; i < array.length; i++) {
        countBoolean.push(isPrime(array[i]));
    }
    return countBoolean;
};
console.log(isPrimeArray(array));