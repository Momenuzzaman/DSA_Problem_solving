const restoreString = (s, indices) => {
    const store = [];
    for (let i = 0; i < indices.length; i++) {
        store[indices[i]] = s[i];

    }
    return store.join("");
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));