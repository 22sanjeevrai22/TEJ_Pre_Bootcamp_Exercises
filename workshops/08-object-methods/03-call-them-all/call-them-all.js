// YOUR CODE BELOW

const callThemAll2 = (objMethod, num) => {
  let resultingArray = [];
  const methods = Object.values(objMethod);

  methods.forEach((method) => {
    if (typeof method === "function") {
      resultingArray.push(method(num));
    }
  });

  return resultingArray;
};

//Using map function
const callThemAll = (objMethod, num) => {
  const methods = Object.values(objMethod);
  const filteredMethodsList = methods.filter((filteredMethod) => {
    return typeof filteredMethod === "function";
  });

  const resultingArray = filteredMethodsList.map((method) => {
    return method(num);
  });

  return resultingArray;
};
