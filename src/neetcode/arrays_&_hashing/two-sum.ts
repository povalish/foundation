/**
 * Two Sum
 * https://neetcode.io/problems/two-integer-sum/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function twoSum(nums: number[], target: number): number[] {
  const entries = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (entries.has(diff)) {
      const j = entries.get(diff)!;
      return [j, i];
    }

    entries.set(nums[i], i);
  }

  return [-1, -1];
}

//
//

describe('Two Sum', () => {
  test('basic cases', () => {
    expect(twoSum([3, 4, 5, 6], 7)).toEqual([0, 1]);
    expect(twoSum([4, 5, 6], 10)).toEqual([0, 2]);
    expect(twoSum([5, 5], 10)).toEqual([0, 1]);
  });
});
