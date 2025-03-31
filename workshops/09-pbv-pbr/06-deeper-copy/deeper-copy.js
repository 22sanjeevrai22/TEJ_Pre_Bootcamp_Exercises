// YOUR CODE BELOW
function deeperCopy(nestedArr) {
  let newArr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    const element = nestedArr[i];
    if (typeof element === "object") {
      let insideNewArr = [];
      for (let j = 0; j < element; j++) {
        newArr.push(element[i]);
      }
      newArr.push(insideNewArr);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}
