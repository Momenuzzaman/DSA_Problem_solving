const arrayStringsAreEqual = (word1, word2) => {
    if (word1.join("") === word2.join("")) return true;
    else return false;
};
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));