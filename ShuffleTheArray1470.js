const shuffle = (nums, n) => {
  let newArray = [];
  for (let i = 0; i < nums.length / 2; i++) {
    newArray.push(nums[i]);
    newArray.push(nums[i + n]);
  }
  return newArray;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 1, 2, 2], 2));