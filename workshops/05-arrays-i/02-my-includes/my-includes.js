// YOUR CODE BELOW
const myIncludes = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
};
