/**
 * Compute Alternating Sum
 * https://leetcode.com/problems/compute-alternating-sum/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function alternatingSum(nums: number[]): number {
  return nums.reduce((a, c, i) => {
    if (i % 2 === 0) a += c;
    else a -= c;
    return a;
  }, 0);
}

//
//

describe('Compute Alternating Sum', () => {
  test('simple cases', () => {
    expect(alternatingSum([1, 3, 5, 7])).toEqual(-4);
    expect(alternatingSum([100])).toEqual(100);
  });
});
