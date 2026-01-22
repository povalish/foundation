/**
 * Maximum Product of Three Numbers
 * https://leetcode.com/problems/maximum-product-of-three-numbers/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function maximumProduct(nums: number[]): number {
  let max = [-Infinity, -Infinity, -Infinity];
  let min = [Infinity, Infinity];

  nums.forEach((num) => {
    if (num > max[0]) max = [num, max[0], max[1]];
    else if (num > max[1]) max = [max[0], num, max[1]];
    else if (num > max[2]) max[2] = num;

    if (num < min[0]) min = [num, min[0]];
    else if (num < min[1]) min[1] = num;
  });

  return Math.max(max[0] * max[1] * max[2], min[0] * min[1] * max[0]);
}

//
//

describe('Maximum Product of Three Numbers', () => {
  test('simple cases', () => {
    expect(maximumProduct([1, 2, 3])).toEqual(6);
    expect(maximumProduct([1, 2, 3, 4])).toEqual(24);
    expect(maximumProduct([-1, -2, -3])).toEqual(-6);
    expect(maximumProduct([-100, -2, -3, 1])).toEqual(300);
  });
});
