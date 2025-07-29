/**
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/?envType=problem-list-v2&envId=dynamic-programming
 *
 * #dynamic #recursion
 *
 */

/**
 * Used loop
 *
 * Time Complexity: O(N^2 / 2)
 * Space Complexity: O(N)
 */

function loop(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const result = [[1], [1, 1]];

  for (let i = 3; i <= numRows; i++) {
    const lastEntry = result[result.length - 1];
    const newEntry = [1];

    for (let j = 1; j < i - 1; j++) {
      newEntry.push(lastEntry[j - 1] + lastEntry[j]);
    }

    newEntry.push(1);
    result.push(newEntry);
  }

  return result;
}

/**
 * Used recursion
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function recursion(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const result = recursion(numRows - 1);
  const lastEntry = result[numRows - 2];
  const newEntry: number[] = [];

  newEntry.push(1);
  for (let i = 1; i < numRows - 1; i++) {
    newEntry.push(lastEntry[i - 1] + lastEntry[i]);
  }
  newEntry.push(1);

  result.push(newEntry);
  return result;
}

//
//

describe("Pascal's Triangle", () => {
  test('recursion', () => {
    expect(recursion(1)).toEqual([[1]]);
    expect(recursion(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  test('loop', () => {
    expect(loop(1)).toEqual([[1]]);
    expect(loop(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});
