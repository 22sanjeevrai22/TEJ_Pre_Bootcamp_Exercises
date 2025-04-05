// YOUR CODE BELOW
const isPalindrome = (word) => {
  const temp = word.toLowerCase();
  if (temp.length === 1) return true;
  let firstLetter = temp[0];
  let lastLetter = temp[temp.length - 1];

  if (firstLetter !== lastLetter) return false;
  const slicedNumber = temp.slice(1, -1);
  return isPalindrome(slicedNumber);
};
