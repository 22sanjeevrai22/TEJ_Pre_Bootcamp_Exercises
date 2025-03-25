// YOUR CODE BELOW
// My original method(I thought if the first element was odd send Odd arrays and vice-verca)
const myMethod = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] % 2 === 0 && arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    } else if (arr[0] % 2 === 1 && arr[i] % 2 === 1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

//Revised method
const evenAndOdd = (arr) => {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    } else if (arr[i] % 2 === 1) {
      oddArray.push(arr[i]);
    }
  }
  return [evenArray, oddArray];
};
