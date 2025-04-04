// YOUR CODE BELOW
const isPalindrome = (word) => {
  const temp = word.toLowerCase(); // Store the original string in lowercase
  if (word.length === 1) return true; // Base case when the string is empty
  const firstAlphabet = word[0].toLowerCase(); // Get the first letter of the word
  const result = isPalindrome(word.slice(1)) + firstAlphabet; // Recursively build the reversed word
  if (result === temp) {
    // Check if the reversed string equals the original
    return true; // It's a palindrome
  }
  return false; // Not a palindrome
};
