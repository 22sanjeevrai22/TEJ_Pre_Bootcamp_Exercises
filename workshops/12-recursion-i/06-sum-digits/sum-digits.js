// YOUR CODE BELOW
const sumDigits = function (num) {
  if (num < 10) return num; //base condition
  //   if(num === 0) return num; //this also works
  const individualNum = num % 10;
  const newNum = Math.floor(num / 10);
  const result = individualNum + sumDigits(newNum);
  return result;
};
