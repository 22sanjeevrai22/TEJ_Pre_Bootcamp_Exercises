// YOUR CODE BELOW
const getLongestName = (familyObject) => {
  let longestName = "";
  for (let name in familyObject) {
    if (name.length > longestName.length) {
      longestName = name;
    }
    const offSpring = familyObject[name];
    if (offSpring) {
      const offSpringLongestName = getLongestName(offSpring);
      if (offSpringLongestName > longestName) {
        //Still has to compare the max name inside the children level to the max name of parent level
        longestName = offSpringLongestName;
      }
    }
  }
  return longestName;
};

//This solution also works just for this particular example, but doesn't work if the familyObject has longest name at other levels
const getLongestName2 = (familyObject) => {
  let longestName = "";
  for (let name in familyObject) {
    if (name.length > longestName.length) {
      longestName = name;
    }
    const offSpring = familyObject[name];
    if (offSpring) {
      return getLongestName2(offSpring); //It returns prematurely after entering one nested array and it doesn't check other nested array
    }
  }
  return longestName;
};
