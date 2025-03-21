// YOUR CODE BELOW
const mostVowels = (source) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const sourceArray = source.split(" ");
  let maxVowelCount = 0;
  let vowelCount = 0;
  let wordWithMostVowels = "";

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[0].some((letter) => vowels.includes(letter))) {
      vowelCount++;
    }
    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      wordWithMostVowels = letter;
    }
  }
  return wordWithMostVowels;
};
