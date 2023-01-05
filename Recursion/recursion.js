const abc = (number) => {
    if (number === 10) {
        return;
    }
    console.log(number);
    abc(number + 1);
};
abc(1);