// YOUR CODE BELOW
const callCount1 = function () {
  let count = 1;
  return function () {
    return count++; //in post increment operator it returns 1 first, then increments
  };
};

//next method
const callCount = function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};
