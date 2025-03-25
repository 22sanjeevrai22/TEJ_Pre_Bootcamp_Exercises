// YOUR CODE BELOW
//default parameter

const myLastIndexOf = (array, searchValue1, startIdx = array.length - 1) => {
  for (let i = startIdx; i >= 0; i--) {
    if (array[i] === searchValue1) return i;
  }
  return -1;
};
