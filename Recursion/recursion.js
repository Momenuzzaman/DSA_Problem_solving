const abc = (number) => {
    if (number === 0) {
        return;
    }
    console.log(number);
    abc(number - 1);
};
abc(10);


const abc2 = (number) => {
    if (number === 10) {
        return;
    }
    console.log(number);
    abc2(number + 1);
};
abc2(1);

// factorial
const fac = (number) => {
    if (number === 1) {
        return 1;
    }
    return number * fac(number - 1);
};
console.log(fac(5));



const sum = (number) => {
    let result = 0;
    if (number > 6) {
        return;
    }
    result = result + number;
    sum(number + 1);
    return result;
};
console.log(sum(1));

// array traverse 
const array = [1, 2, 3, 4, 5];
const traverse = (array, i) => {
    if (array.length == i) {
        return;
    }
    console.log(array[i]);
    traverse(array, i + 1);
};
traverse(array, 0);

// sum 
let sumValue = 0;
const summation = (array, i) => {
    if (array.length == i) {
        return;
    }
    sumValue = sumValue + array[i];
    summation(array, i + 1);
    return sumValue;
};
console.log(summation(array, 0));

