/**
 * Minimum Difference Between Highest And Lowest of K Scores
 * https://neetcode.io/problems/minimum-difference-between-highest-and-lowest-of-k-scores/question?list=allNC
 *
 * Time Complexity: O(n*logn)
 * Space Complexity: O(1)
 */

function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = k - 1;

  let minDiff = nums[nums.length - 1];

  while (end < nums.length) {
    minDiff = Math.min(minDiff, nums[end] - nums[start]);
    start++;
    end++;
  }

  return minDiff;
}

//

// minimumDifference([2, 5, 3, 1, 6, 3], 3);

describe('Minimum Difference Between Highest And Lowest of K Scores', () => {
  it('should pass basic cases', () => {
    expect(minimumDifference([2, 5, 3, 1, 6, 3], 3)).toEqual(1);
    expect(minimumDifference([9, 4, 1, 7], 2)).toEqual(2);
  });
});
