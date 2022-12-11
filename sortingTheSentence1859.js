const sortSentence = (s) => {
    const sort = s.split(" ");
    const sentence = [];
    for (let i = 0; i < sort.length; i++) {
        const word = sort[i].slice(-1);
        console.log(word);
        sentence[word] = sort[i].slice(0, -1);
        console.log(sentence);
    }
    return sentence.join(' ').replace(" ", "");

};
console.log(sortSentence("is2 sentence4 This1 a3"));