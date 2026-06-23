/**
 * Valid Sudoku
 * https://neetcode.io/problems/valid-sudoku/question?list=neetcode150
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function getBoxHash(rowIdx: number, colIdx: number): string {
  return `${Math.floor(rowIdx / 3)}-${Math.floor(colIdx / 3)}`;
}

function isValidSudoku(board: string[][]): boolean {
  const columns = new Map<number, Set<string>>();
  const rows = new Map<number, Set<string>>();
  const boxes = new Map<string, Set<string>>();

  for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) {
      if (board[rowIdx][colIdx] === '.') continue;

      const cell = board[rowIdx][colIdx];
      const hash = getBoxHash(rowIdx, colIdx);

      if (boxes.get(hash)?.has(cell)) return false;
      if (rows.get(rowIdx)?.has(cell)) return false;
      if (columns.get(colIdx)?.has(cell)) return false;

      if (!boxes.get(hash)) boxes.set(hash, new Set());
      if (!columns.get(colIdx)) columns.set(colIdx, new Set());
      if (!rows.get(rowIdx)) rows.set(rowIdx, new Set());

      boxes.get(hash)?.add(cell);
      rows.get(rowIdx)?.add(cell);
      columns.get(colIdx)?.add(cell);
    }
  }

  return true;
}

//

describe('Valid Sudoku', () => {
  it('should pass basic cases', () => {
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
