const finalValue = (operation) => {
    const matched = {
        '++X': 1,
        'X++': 1,
        'X': 0,
        '--X': -1,
        'X--': -1
    };
    let sum = 0;
    for (let i = 0; i < operation.length; i++) {
        sum += matched[operation[i]];
    }
    return sum;
};
console.log(finalValue(["++X", "++X", "X++"]));
console.log(finalValue(["X++", "++X", "--X", "X--"]));
console.log(finalValue(["--X", "X++", "X++"]));
