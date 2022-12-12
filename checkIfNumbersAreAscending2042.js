var areNumbersAscending = function (s) {
    const arr = s
        .split(" ")
        .filter((num) => +num)
        .map((item) => +item);
    console.log(arr);
    let is_sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1] || arr[i] === arr[i + 1]) {
            is_sorted = false;
            break;
        }
    }
    return is_sorted;
};

console.log(
    areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);

console.log(areNumbersAscending("hello world 5 x 5"));
