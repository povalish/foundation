/**
 * Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=problem-list-v2&envId=sliding-window
 */

function findMaxAverage(nums: number[], k: number): number {
  let maxAverage = 0;
  let windowAverage = 0;
  let windowSum = 0;

  let pLeft = 0;
  let pRight = 0;

  while (pRight < k) {
    windowSum += nums[pRight];
    pRight++;
  }

  windowAverage = windowSum / pRight;
  maxAverage = windowAverage;

  while (pRight < nums.length) {
    windowSum -= nums[pLeft];
    windowSum += nums[pRight];
    windowAverage = windowSum / k;
    maxAverage = Math.max(maxAverage, windowAverage);

    pRight++;
    pLeft++;
  }

  return maxAverage;
}

//

// findMaxAverage([1, 12, -5, -6, 50, 3], 4);

describe('Maximum Average Subarray I', () => {
  it('should pass basic cases', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
    expect(findMaxAverage([5], 1)).toEqual(5);
  });
});

/**
 * windowAverage - 0.5
 * windowSum - 1
 *
 * 1 - [12 - -5 - -6 - 50] - 3
 */
