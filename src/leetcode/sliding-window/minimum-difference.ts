/**
 * Minimum Difference Between Highest and Lowest of K Scores
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/?envType=problem-list-v2&envId=sliding-window
 */

function minimumDifference(nums: number[], k: number): number {
  if (nums.length <= 1) return 0;

  nums.sort((a, b) => a - b);

  let minDiff = +Infinity;

  let pLeft = 0;
  let pRight = k - 1;

  while (pRight < nums.length) {
    minDiff = Math.min(minDiff, nums[pRight] - nums[pLeft]);
    pLeft++;
    pRight++;
  }

  return minDiff === +Infinity ? 0 : minDiff;
}

//

// minimumDifference([9, 4, 1, 7], 1);

describe('Minimum Difference Between Highest and Lowest of K Scores', () => {
  it('should pass basic cases', () => {
    expect(minimumDifference([90], 1)).toEqual(0);
    expect(minimumDifference([9, 4, 1, 7], 2)).toEqual(2);
  });
});
