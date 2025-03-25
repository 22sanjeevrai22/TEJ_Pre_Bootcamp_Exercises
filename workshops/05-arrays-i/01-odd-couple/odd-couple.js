// YOUR CODE BELOW
const oddCouple = (arr) => {
  const newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push(arr[i]);
      count++;
      if (count === 2) break;
    }
  }
  return newArr;
};

// Alternate Method
// const oddCouple = (arr) => {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 1) newArr.push(arr[i]);
//       if (newArr.length === 2) break;
//     }
//     return newArr;
//   };
