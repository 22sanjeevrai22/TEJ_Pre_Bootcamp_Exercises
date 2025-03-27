// YOUR CODE BELOW
const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let keys in obj1) {
    if (obj1[keys] !== obj2[keys]) {
      return false;
    }
  }

  for (let keys in obj2) {
    if (obj1[keys] !== obj2[keys]) {
      return false;
    }
  }
  return true;
};
