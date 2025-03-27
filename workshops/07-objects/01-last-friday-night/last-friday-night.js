// YOUR CODE BELOW
const lastFridayNight = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].amount;
  }
  return sum;
};

//Reduce method
const lastFridayNight1 = (arr) => {
  if (!Array.isArray(arr)) return arr.amount; //If the arr is not array but a single object.
  return arr.reduce((sum, obj) => {
    return sum + obj.amount;
  }, 0);
};
