// YOUR CODE BELOW
const veryOdd = (arr) => {
  const oddNumberList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNumberList.push(arr[i]);
    }
  }
  return oddNumberList;
};
