var numOfStrings = (patterns, word) => {
    let count = 0;
    for (let pattern of patterns) {
        console.log(pattern);
        if (word.includes(pattern)) {
            count++;
        }
    }
    return count;
};
console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));