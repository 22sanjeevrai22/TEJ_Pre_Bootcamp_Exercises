// YOUR CODE BELOW
//My method
const chainReaction = (startingNumber, functionArrays) => {
  for (let i = 0; i < functionArrays.length; i++) {
    const functionElement = functionArrays[i];
    startingNumber = functionElement(startingNumber);
  }
  return startingNumber;
};

//Bootcamp Method
const chainReaction2 = (startingNumber, functionArrays) => {
  functionArrays.map((fn) => {
    startingNumber = fn(startingNumber);
  });
  return startingNumber;
};
