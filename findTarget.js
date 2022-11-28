const numbs = [1, 2, 5, 2, 3];
const target = 2;

const targetIndices = (numbs, target) => {
    const sortNumbs = numbs.sort((a, b) => a - b);
    const output = [];
    for (let i = 0; i < sortNumbs.length; i++) {
        if (target == sortNumbs[i]) {
            output.push(i);
        }
    }
    return output;
};

console.log(targetIndices(numbs, target));