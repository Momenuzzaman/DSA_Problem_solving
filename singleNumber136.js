const singleNumber = (numbs) => {
    const sorted = numbs.sort((a, b) => a - b);
    console.log(sorted);
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i - 1] !== sorted[i] && sorted[i + 1] !== sorted[i]) {
            return sorted[i];
        }
    }
};
console.log(singleNumber([4, 1, 2, 1, 2]));