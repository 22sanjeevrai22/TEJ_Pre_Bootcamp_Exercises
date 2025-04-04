// YOUR CODE BELOW
const sumNums = (num) => {
  //Base Condition
  if (num <= 1) return 1;

  const result = num + sumNums(num - 1);

  return result;
};
