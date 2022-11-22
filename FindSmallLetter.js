const letters = ["c", "f", "j", "z"];
const target = 'c';
const nums = [10, 20, 30, 40, 50, 60, 70];
const target = 60;

const nextGreatestLetter = (letters, target) => {
    let start = 0;
    let end = letters.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (letters[mid] > target) {
            end = mid - 1;
        }
        else {

            start = mid + 1;
        }
    }
    return letters[start % letters.length];
};


console.log(nextGreatestLetter(letters, target));