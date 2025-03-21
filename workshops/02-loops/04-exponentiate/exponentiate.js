// YOUR CODE BELOW
//My method
// const exponentiate = (num1, pow) => {
//   let product = 1;
//   for (let i = 1; i <= pow; i++) {
//     product = product * num1;
//   }
//   return product;
// };

//Hint method
const exponentiate = (num1, pow) => {
  if (pow === 0) return 1;
  let result = 1;
  while (pow >= 1) {
    result = result * num1;

    pow--;
  }
  return result;
};
