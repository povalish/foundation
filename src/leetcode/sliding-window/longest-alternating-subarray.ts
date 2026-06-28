/**
 * Longest Even Odd Subarray With Threshold
 * https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/description/?envType=problem-list-v2&envId=sliding-window
 */

function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let maxLength = 0;

  let pLeft = 0;
  let pRight = 0;

  while (pRight < nums.length) {
    const isRightDiffValid = nums[pRight - 1] % 2 !== nums[pRight] % 2;
    const isRightThresholdValid = nums[pRight] <= threshold;
    const isLeftValid = nums[pLeft] % 2 === 0;
    const isLeftThresholdValid = nums[pLeft] <= threshold;

    if (isRightDiffValid && isRightThresholdValid && isLeftValid && isLeftThresholdValid) {
      maxLength = Math.max(maxLength, pRight - pLeft + 1);
      pRight++;
    }

    if (!isRightDiffValid || !isRightThresholdValid) pRight++;
    if (!isLeftValid || !isLeftThresholdValid) pLeft++;

    if (pLeft > pRight) pRight++;
  }

  return maxLength;
}

//

describe('Longest Even Odd Subarray With Threshold', () => {
  it('should pass basic cases', () => {
    expect(longestAlternatingSubarray([3, 2, 5, 4], 5)).toEqual(3);
    expect(longestAlternatingSubarray([1, 2], 2)).toEqual(1);
    expect(longestAlternatingSubarray([2, 3, 4, 5], 4)).toEqual(3);
  });
});

/**
 * threshold - 5
 * maxLength - 3
 * 3 - [2] - 5 - 4]
 *
 * 1. nums[pLeft] % 0 === 0
 * 2. nums[pLeft] <= threshold
 * 3. nums[pRight - 1] % 2 !== nums[pRight] % 2
 * 4. nums[pRight] <= threshold
 *
 */
