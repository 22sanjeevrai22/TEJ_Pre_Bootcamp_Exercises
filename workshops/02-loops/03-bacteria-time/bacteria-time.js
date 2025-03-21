// YOUR CODE BELOW
//I forgot that while and do-while loop existed
const bacteriaTime = (num1, num2) => {
  if (num2 < num1) return "targetNum must be larger than currentNum";
  let count = 0;
  for (let i = num1; i < num2; i = i * 2) {
    count++;
  }
  return count * 20;
};
