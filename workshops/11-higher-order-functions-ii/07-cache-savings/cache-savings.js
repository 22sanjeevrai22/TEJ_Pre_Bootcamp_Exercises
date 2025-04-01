// YOUR CODE BELOW
function cacheSavings(callback) {
  let cacheMemory = {};
  return (arg) => {
    if (!(arg in cacheMemory)) {
      const result = callback(arg);
      cacheMemory[arg] = result;
    }
    return cacheMemory[arg];
  };
}
