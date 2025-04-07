// YOUR CODE BELOW
const theTruthCounts = function (nestedArr) {
  let count = 0;
  for (let i = 0; i < nestedArr.length; i++) {
    const element = nestedArr[i];
    if (Array.isArray(element)) {
      count += theTruthCounts(element);
    } else {
      if (element) {
        count++;
      }
    }
  }
  return count;
};
