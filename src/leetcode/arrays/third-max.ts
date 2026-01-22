/**
 * Third Maximum Number
 * https://leetcode.com/problems/third-maximum-number/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function thirdMax(nums: number[]): number {
  let max = [-Infinity, -Infinity, -Infinity];

  for (const num of nums) {
    if (max.includes(num)) continue;
    if (num > max[0]) max = [num, max[0], max[1]];
    else if (num > max[1]) max = [max[0], num, max[1]];
    else if (num > max[2]) max = [max[0], max[1], num];
  }

  if (max[2] === -Infinity) return max[0];
  if (max[1] === -Infinity) return max[0];
  return max[2];
}

//
//

describe('Third Maximum Number', () => {
  test('simple cases', () => {
    expect(thirdMax([3, 2, 1])).toEqual(1);
    expect(thirdMax([1, 2])).toEqual(2);
    expect(thirdMax([2, 2, 3, 1])).toEqual(1);
    expect(thirdMax([2, 2, 3, 1, 5, 6, 7])).toEqual(5);
  });
});
