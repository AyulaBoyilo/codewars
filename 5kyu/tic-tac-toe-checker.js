// DESCRIPTION:
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// ARRAYS ALGORITHMS

function isSolved(board) {
  let res = 0;
  tests: for (i = 0; i < board.length; i++) {
    // check row
    if (board[i].every((el) => el == 1)) {
      res = 1;
      break tests;
    }
    if (board[i].every((el) => el == 2)) {
      res = 2;
      break tests;
    }
    // check column
    if (
      board[0][i] == board[1][i] &&
      board[1][i] == board[2][i] &&
      board[0][i] == 1
    ) {
      res = 1;
      break tests;
    } else if (
      board[0][i] == board[1][i] &&
      board[1][i] == board[2][i] &&
      board[0][i] == 2
    ) {
      res = 2;
      break tests;
    }
  }
  // check diagonals
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] == 1
  ) {
    res = 1;
  } else if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] == 2
  ) {
    res = 2;
  }
  // check for draw
  if (
    (board[0].some((el) => el == 0) ||
      board[1].some((el) => el == 0) ||
      board[2].some((el) => el == 0)) &&
    res == 0
  ) {
    res = -1;
  }
  return res;
}
