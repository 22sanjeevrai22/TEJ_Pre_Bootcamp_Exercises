// YOUR CODE BELOW
const zooInventory = (zoo) => {
  let resultArray = [];
  for (let i = 0; i < zoo.length; i++) {
    resultArray.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`);
  }
  return resultArray;
};
