const reverseWords = (s) => {
    s = s.split(" ");
    s = s.map((word) => word.split("").reverse().join("")).join(" ");
    return s;
};
console.log(reverseWords("Let's take LeetCode contest"));
