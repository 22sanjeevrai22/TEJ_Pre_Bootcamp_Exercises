// YOUR CODE BELOW
const veryOddMutant = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "normie";
      count++;
    }
  }
  return count;
};
