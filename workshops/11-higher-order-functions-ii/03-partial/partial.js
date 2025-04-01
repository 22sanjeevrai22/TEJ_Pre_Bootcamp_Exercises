// YOUR CODE BELOW
const partial = function (callback, argA) {
  return function (argB) {
    return callback(argA, argB);
  };
};
