/**
 * Pascal's Triangle 2
 * https://leetcode.com/problems/pascals-triangle-ii/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * #dynamic #recursion
 *
 * Space Complexity: O(N)
 * Time Complexity: O(N)
 */

function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  if (rowIndex === 2) return [1, 2, 1];
  if (rowIndex === 3) return [1, 3, 3, 1];

  const result = [1];
  let prev = 1;

  for (let i = 1; i <= rowIndex; i++) {
    const value = prev * ((rowIndex - i + 1) / i);
    prev = value;
    result.push(prev);
  }

  return result;
}

//
//

describe("Pascal's Triangle 2", () => {
  test('should pass simple cases', () => {
    expect(getRow(0)).toEqual([1]);
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
    expect(getRow(4)).toEqual([1, 4, 6, 4, 1]);
    expect(getRow(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
    expect(getRow(8)).toEqual([1, 8, 28, 56, 70, 56, 28, 8, 1]);
  });
});
