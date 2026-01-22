/**
 * Valid Sudoku
 * https://neetcode.io/problems/valid-sudoku/question?list=neetcode150
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function isValidSudoku(board: string[][]): boolean {
  // Utility: validate row and col
  //
  const getIsValidColAndRow = (middleIndex: number): boolean => {
    const numInRow = new Map<string, boolean>();
    const numInCol = new Map<string, boolean>();

    for (let i = 0; i < 9; i++) {
      const rowCell = board[middleIndex][i];
      const colCell = board[i][middleIndex];

      if (numInCol.has(colCell)) {
        return false;
      }

      if (numInRow.has(rowCell)) {
        return false;
      }

      if (rowCell !== '.') numInRow.set(rowCell, true);
      if (colCell !== '.') numInCol.set(colCell, true);
    }

    return true;
  };

  // Utility: validate box
  //
  const getIsValidBox = (rowIdxStart: number, rowIdxEnd: number, colIdxStart: number, colIdxEnd: number): boolean => {
    const numInBox = new Map<string, boolean>();

    for (let i = rowIdxStart; i < rowIdxEnd; i++) {
      for (let j = colIdxStart; j < colIdxEnd; j++) {
        if (numInBox.has(board[i][j])) return false;
        if (board[i][j] !== '.') numInBox.set(board[i][j], true);
      }
    }

    return true;
  };

  // Check all rows and cols
  //
  for (let i = 0; i < board.length; i++) {
    const isValidRowAndCol = getIsValidColAndRow(i);
    if (!isValidRowAndCol) return false;
  }

  // Check all sub-boxes
  //
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const isValidBox = getIsValidBox(i * 3, i * 3 + 3, j * 3, j * 3 + 3);
      if (!isValidBox) return false;
    }
  }

  return true;
}

//
//

describe('Valid Sudoku', () => {
  test('basic cases', () => {
    let board = [
      ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
      ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
      ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
      ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ];
    expect(isValidSudoku(board)).toEqual(true);

    board = [
      ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
      ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
      ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
      ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
      ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ];
    expect(isValidSudoku(board)).toEqual(false);
  });
});
