// YOUR CODE BELOW
const myJoin = (array, seperator = ",") => {
  let newArray = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray = newArray + seperator;
    }
    if (array[i] !== undefined && array[i] !== null) {
      newArray = newArray + array[i];
    }
  }

  return newArray;
};

//My method
const myJoin1 = (array, value = ",") => {
  return array.join(value);
};
