// YOUR CODE BELOW
function crazyCaps(word) {
  let char = "";
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 1) {
      char = char + word[i].toUpperCase();
    } else if (i % 2 == 0) {
      char = char + word[i];
    }
  }
  return char;
}
