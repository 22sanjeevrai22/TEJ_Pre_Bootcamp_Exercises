// YOUR CODE BELOW
const mySlice = (string, startIdx, endIdx) => {
  if (!endIdx && !startIdx) return string;
  if (!endIdx) endIdx = string.length;
  let slicedString = "";

  for (let i = startIdx; i < endIdx; i++) {
    slicedString += string[i];
  }
  return slicedString;
};
