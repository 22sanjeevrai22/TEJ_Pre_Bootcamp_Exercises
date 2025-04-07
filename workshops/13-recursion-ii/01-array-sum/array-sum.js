// YOUR CODE BELOW
const arraySum = (nestedArray) => {
  let sum = 0;
  for (let i = 0; i < nestedArray.length; i++) {
    const individualElement = nestedArray[i];
    if (Array.isArray(individualElement)) {
      sum += arraySum(individualElement);
    } else {
      sum += individualElement;
    }
  }

  return sum;
};
