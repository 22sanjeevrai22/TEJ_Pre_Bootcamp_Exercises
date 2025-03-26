// YOUR CODE BELOW
const makeGrid = (cols, rows) => {
  let gridArray = [];
  for (let i = 0; i < rows; i++) {
    gridArray[i] = [];
    for (let j = 0; j < cols; j++) {
      gridArray[i][j] = j + 1;
    }
  }
  return gridArray;
};
