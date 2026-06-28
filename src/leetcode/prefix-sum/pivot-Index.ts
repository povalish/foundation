/**
 * Find Pivot Index
 * https://leetcode.com/problems/find-pivot-index/description/?envType=problem-list-v2&envId=prefix-sum
 */

function pivotIndex(nums: number[]): number {
  let overalSum = 0;
  for (const num of nums) {
    overalSum += num;
  }

  let forwardSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const backwardSum = overalSum - forwardSum - nums[i];
    if (forwardSum === backwardSum) return i;
    forwardSum += nums[i];
  }

  return -1;
}

//

// pivotIndex([0, 0]);

describe('Find Pivot Index', () => {
  it('should pass basic cases', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
    expect(pivotIndex([1, 2, 3])).toEqual(-1);
    expect(pivotIndex([2, 1, -1])).toEqual(0);
    expect(pivotIndex([0, 0])).toEqual(0);
    expect(pivotIndex([-1, -1, -1, 1, 1, 1])).toEqual(-1);
  });
});

/**
 * [1, 8, 11, 17, 22, 28]
 * [1, 8, 11, X, 11, 6]
 */
