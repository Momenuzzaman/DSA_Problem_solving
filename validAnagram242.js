const isAnagram = (s, t) => {
    const st = s.split("").sort().join();
    console.log(st);
    const tt = t.split("").sort().join();
    console.log(tt);

    return st === tt;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));