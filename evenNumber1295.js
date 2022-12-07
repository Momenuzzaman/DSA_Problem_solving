const findNumbers = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length % 2 === 0) {
            count++;
        }
    }
    return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));