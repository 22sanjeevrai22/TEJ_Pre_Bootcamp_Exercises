// YOUR CODE BELOW
const backwardString = (str) => {
  //base case
  if (str.length === 0) return;

  console.log(str[str.length - 1]);
  const newString = str.slice(0, -1);
  backwardString(newString);
};
