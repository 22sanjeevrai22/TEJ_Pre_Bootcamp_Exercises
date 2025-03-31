// YOUR CODE BELOW
const finderFunction = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let result = callback(num);
    if (result) {
      return i;
    }
  }
  return -1;
};
