/**
 * Range Sum Query - Immutable
 * https://leetcode.com/problems/range-sum-query-immutable/description/?envType=problem-list-v2&envId=prefix-sum
 */

class NumArray {
  private optimized: number[] = [];

  constructor(nums: number[]) {
    let sum = 0;
    for (const num of nums) {
      sum += num;
      this.optimized.push(sum);
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.optimized[right];
    return this.optimized[right] - this.optimized[left - 1];
  }
}

//

describe('Range Sum Query - Immutable', () => {
  it('should pass basic cases', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(numArray.sumRange(0, 2)).toEqual(1);
    expect(numArray.sumRange(2, 5)).toEqual(-1);
    expect(numArray.sumRange(0, 5)).toEqual(-3);
  });
});
