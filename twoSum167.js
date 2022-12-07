const twoSum = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let sum = numbers[start] + numbers[end];
        if (sum == target) {
            return [start + 1, end + 1];
        }
        else if (sum < target) {
            start++;
        }
        else {
            end--;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));