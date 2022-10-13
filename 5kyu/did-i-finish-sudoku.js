// DESCRIPTION:
// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

// Rows:

// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

// Columns:

// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

// Regions

// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:

// For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/

// MATHEMATICS PUZZLES GAMES GAME SOLVERS

function doneOrNot(board) {
  let done = true;
  let cells = [];

  // define cells
  for (i = 0; i < board.length; i++) {
    console.log("board[3 * i]", board[i % 3]);
    if (i % 3 == 0) {
      cells[i] = board[i]
        .slice(0, 3)
        .concat(board[i + 1].slice(0, 3).concat(board[i + 2].slice(0, 3)));
    } else if (i % 3 == 1) {
      cells[i] = board[i - 1]
        .slice(3, 6)
        .concat(board[i].slice(3, 6).concat(board[i + 1].slice(3, 6)));
    } else {
      cells[i] = board[i - 2]
        .slice(6)
        .concat(board[i - 1].slice(6).concat(board[i].slice(6)));
    }
  }

  // run tests
  tests: for (i = 0; i < board.length; i++) {
    // check for 0
    if (board[i].find((el) => el == 0)) {
      done = false;
      break tests;
    }
    for (j = i + 1; j < board.length; j++) {
      for (k = 0; k < board.length; k++) {
        // check rows
        if (board[i][k] == board[j][k]) {
          done = false;
          break tests;
        }
        // check columns
        if (board[k][i] == board[k][j]) {
          done = false;
          break tests;
        }
        //check cells
        if (cells[k][i] == cells[k][j]) {
          done = false;
          break tests;
        }
      }
    }
  }

  return done ? "Finished!" : "Try again!";
}
