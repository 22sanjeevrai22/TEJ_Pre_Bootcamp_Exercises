// YOUR CODE BELOW
const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  arr.length = 0; //emptying an array

  for (let i = 0; i < reversed.length; i++) {
    arr.push(reversed[i]);
  }

  return reversed;
};
