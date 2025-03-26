// YOUR CODE BELOW
const mySlice = (arr, startIdx, endIdx) => {
  let returnedArray = [];
  if (startIdx === undefined) startIdx = 0;
  if (startIdx < 0) startIdx = startIdx + arr.length;
  if (endIdx === undefined) endIdx = arr.length;
  if (endIdx < 0) endIdx = endIdx + arr.length;
  for (let i = startIdx; i < endIdx; i++) {
    returnedArray.push(arr[i]);
  }
  return returnedArray;
};
