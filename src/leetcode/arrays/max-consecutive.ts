/**
 * Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num === 1) {
      currentCount += 1;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

//
//

describe('Max Consecutive Ones', () => {
  test('simple cases', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2);
  });
});
