// YOUR CODE BELOW
const vowels = ["a", "e", "i", "o", "u"];

//Counting from forward
const countVowels = (str, count = 0) => {
  if (str.length === 0) return count;

  const currentAlphabet = str[0];
  if (vowels.includes(currentAlphabet)) {
    count++;
  }

  const newStr = str.slice(1);
  return countVowels(newStr, count);
};

//counting from behind
const countVowels2 = (str, count = 0) => {
  //base condition
  if (str.length === 0) return count;
  const currentAlphabet = str[str.length - 1];
  console.log(currentAlphabet);
  if (vowels.includes(currentAlphabet)) {
    count++;
  }

  const newStr = str.slice(0, -1);
  return countVowels(newStr, count);
};
