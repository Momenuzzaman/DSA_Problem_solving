const isPalindrome = (array) => {
    let i = 0;
    k = array.length - 1;
    while (i <= k) {
        if (array[i] != array[k]) {
            return false;
        }
        i++;
        k--;
    }
    return true;
};

console.log(isPalindrome('mom'));
console.log(isPalindrome('emon'));
console.log(isPalindrome('dad'));
