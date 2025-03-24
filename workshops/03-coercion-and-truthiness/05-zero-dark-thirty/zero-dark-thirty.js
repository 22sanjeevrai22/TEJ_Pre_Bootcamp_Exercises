// YOUR CODE BELOW
const zeroDarkThirty = (num) => {
  if (num === 0) return NaN;
  if (num) {
    const strippedNumber = Number(num.toString().replace(/0/g, ""));
    return strippedNumber;
  }
};
