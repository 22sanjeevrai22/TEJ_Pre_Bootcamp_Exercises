// YOUR CODE BELOW
const reverseArray = (arr, newArray = [], index = arr.length - 1) => {
  if (index < 0) return newArray; //base condition
  newArray.push(arr[index]);
  console.log(newArray);
  index--;
  const slicedArray = arr.slice(0, -1);
  return reverseArray(slicedArray, newArray, index);
};
