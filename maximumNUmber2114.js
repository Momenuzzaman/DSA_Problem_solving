const mostWordsFound = (sentences) => {
    let max = 0;
    let tem = 0;
    for (let sentence of sentences) {
        tem = sentence.split(" ").length;
        if (tem > max) {
            max = tem;
        }
    }
    return max;
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));