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
    console.log(this.board);
    return this.board;
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log(this.board);
    return this.board;
  },
};
