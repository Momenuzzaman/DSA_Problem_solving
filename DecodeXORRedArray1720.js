const decode = (encoded, first) => {
    const result = [first];
    for (let i = 0; i < encoded.length; i++)
        result.push(result[i] ^ encoded[i]);
    return result;
};
console.log(decode([1, 2, 3], 1));
console.log(decode([6, 2, 7, 3], 4));



let decode2 = function (encoded, first) {
    let result = [first],
        current = first;
    for (let i = 0; i < encoded.length; i++) {
        current = encoded[i] ^ current;
        result[1 + i] = current;
    }
    return result;
};
console.log(decode2([1, 2, 3], 1));