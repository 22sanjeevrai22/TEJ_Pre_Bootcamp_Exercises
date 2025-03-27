// YOUR CODE BELOW
const frequencyAnalysis = (string) => {
  let count = {};
  for (let j = 0; j < string.length; j++) {
    if (string[j] === "i") {
      count["i"] ? (count["i"] += 1) : (count["i"] = 1);
    }
    if (string[j] === "l") {
      count["l"] ? (count["l"] += 1) : (count["l"] = 1);
    }
    if (string[j] === "k") {
      count["k"] ? (count["k"] += 1) : (count["k"] = 1);
    }
  }
  return count;
};
