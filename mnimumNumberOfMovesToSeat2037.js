const minMovesToSeat = (seats, students) => {
    const sortedSeat = seats.sort((a, b) => a - b);
    const sortedStudent = students.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < sortedSeat.length; i++) {
        count += Math.abs(sortedSeat[i] - sortedStudent[i]);
    }
    return count;
};
console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
