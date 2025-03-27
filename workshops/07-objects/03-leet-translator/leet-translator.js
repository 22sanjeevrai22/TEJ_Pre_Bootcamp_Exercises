let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
const leetTranslator = (originalString) => {
  let leetMap = {};
  let result = "";
  let input = originalString.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    leetMap[letters[i]] = leetChars[i];
  }
  for (let j = 0; j < input.length; j++) {
    if (input[j] in leetMap) {
      result = result + leetMap[input[j]];
    } else {
      result = result + input[j]; // Keep the character if it's not in leetMap
    }
  }
  return result;
};
