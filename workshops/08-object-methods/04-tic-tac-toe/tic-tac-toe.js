// YOUR CODE BELOW
const ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (x, row, column) {
    if (!this.board[row][column]) {
      this.board[row][column] = x;
    }
    return this.board;
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    return this.board;
  },
};
