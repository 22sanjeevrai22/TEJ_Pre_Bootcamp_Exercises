// YOUR CODE BELOW
const myIndexOf = (source, searchValue, startIdx) => {
  if (!searchValue) return -1;
  if (!startIdx) startIdx = 0;
  let newString = "";
  for (let i = startIdx; i < source.length; i++) {
    newString = source.slice(i, i + searchValue.length);
    if (newString === searchValue) {
      return i;
    }
  }
  return -1;
};
