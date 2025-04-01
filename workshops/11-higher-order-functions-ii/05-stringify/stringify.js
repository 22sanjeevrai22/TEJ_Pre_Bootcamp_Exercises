// YOUR CODE BELOW
function stringify(callback) {
  return () => {
    const result = callback();
    return JSON.stringify(result);
  };
}
