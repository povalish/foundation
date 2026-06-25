/**
 * Minimum Size Subarray Sum
 * https://neetcode.io/problems/minimum-size-subarray-sum/question?list=neetcode250
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let window = 0;
  let minLen = +Infinity;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (window >= target) minLen = Math.min(minLen, right - left);
    if (window < target) {
      window += nums[right];
      right++;
    } else {
      window -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//

// minSubArrayLen(5, [1, 2, 1]);

describe('Minimum Size Subarray Sum', () => {
  it('should pass basic cases', () => {
    expect(minSubArrayLen(10, [2, 1, 5, 1, 5, 3])).toEqual(3);
    expect(minSubArrayLen(5, [1, 2, 1])).toEqual(0);
  });
});

/**
 * minLen - 0
 * window - 2
 *
 * [2] - 1 - 5 - 1 - 5 - 3
 */
