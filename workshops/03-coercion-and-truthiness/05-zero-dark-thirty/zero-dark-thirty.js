// YOUR CODE BELOW
const zeroDarkThirty = (num) => {
  if (num === 0) return NaN;
  if (num) {
    const strippedNumber = Number(num.toString().replace(/0/g, ""));
    return strippedNumber;
  }
};

function zeroDarkThirty2(a) {
  let result = 1;
  if (a === 0) return NaN;
  for (i = 0; i < a.lenght; i++) {
    if (a[i] === 0) {
      continue;
      result += 0;
    }
  }
  return result;
}
