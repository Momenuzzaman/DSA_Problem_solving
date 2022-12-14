const isPalindrome = (array) => {
    let i = 0;
    k = array.length - 1;
    while (i <= k) {
        if (array[i] !== array[k]) {
            return false;
        }
        i++;
        k--;
    }
    return true;
};

const firstPalindrome = (words) => {
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i];
        }
    }
    return '';
};
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(isPalindrome('emon'));
console.log(isPalindrome('dad'));
