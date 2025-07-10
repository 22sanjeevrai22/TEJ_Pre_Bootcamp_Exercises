// YOUR CODE BELOW
//My method(It works)
// const removeColumns = (originalGrid, removeColumn) => {
//   let newArray = [];
//   for (let i = 0; i < originalGrid.length; i++) {
//     newArray[i] = [];
//     for (let j = 0; j < originalGrid[i].length - removeColumn; j++) {
//       newArray[i][j] = originalGrid[i][j];
//     }
//   }
//   return newArray;
// };

const removeColumns = (originalGrid, removeColumn) => {
  const newArray = [];

  for (let i = 0; i < originalGrid.length; i++) {
    const newRow = [];
    const newLength = originalGrid[i].length - removeColumn;

    for (let j = 0; j < newLength; j++) {
      newRow.push(originalGrid[i][j]);
    }

    newArray.push(newRow);
  }

  return newArray;
};


//From Hints
const removeColumns2 = (originalGrid, removeColumns) => {
  for (let i = 0; i < originalGrid.length; i++) {
    for (let j = 0; j < removeColumns; j++) {
      originalGrid[i].pop();
    }
  }
  return originalGrid;
};
