// YOUR CODE BELOW
const mySplice = (arr, startIdx, deleteCount, valueToAdd) => {
  let removedPortion = [];
  let remainingPortion = [];

  for (let i = 0; i < startIdx; i++) {
    remainingPortion.push(arr[i]);
  }

  if (valueToAdd) {
    remainingPortion.push(valueToAdd);
  }

  for (let i = startIdx; i < startIdx + deleteCount; i++) {
    removedPortion.push(arr[i]);
  }

  for (let i = startIdx + deleteCount; i < arr.length; i++) {
    remainingPortion.push(arr[i]);
  }

  //emptying an original array
  arr.length = 0;

  //   another method of emptying array
  //   while (arr.length) {
  //     arr.pop();
  //   }

  for (let i = 0; i < remainingPortion.length; i++) {
    arr.push(remainingPortion[i]);
  }
  //   arr = [...remainingPortion]; //this doesn't work because it only changes the local reference
  return removedPortion;
};
