// YOUR CODE BELOW
const rotateArray = (array, step) => {
  let newArray = [];
  if (step !== undefined) {
    for (let i = 0; i < array.length; i++) {
      let j = (i + step) % array.length;
      if (j < 0) j = j + array.length;
      newArray[j] = array[i];
    }
    return newArray;
  }
  return array;
};
