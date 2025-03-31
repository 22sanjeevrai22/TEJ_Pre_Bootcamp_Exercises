// YOUR CODE BELOW
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    callback(number, i);
  }
};
