/**
 * Sum of Squares of Special Elements
 * https://leetcode.com/problems/sum-of-squares-of-special-elements/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function sumOfSquares(nums: number[]): number {
  return nums.reduce((a, c, i) => (nums.length % (i + 1) === 0 ? (a += c * c) : a), 0);
}

//
//

describe('Sum of Squares of Special Elements', () => {
  test('simple cases', () => {
    expect(sumOfSquares([1, 2, 3, 4])).toEqual(21);
    expect(sumOfSquares([2, 7, 1, 19, 18, 3])).toEqual(63);
  });
});
