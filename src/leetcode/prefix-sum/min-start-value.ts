/**
 * Minimum Value to Get Positive Step by Step Sum
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/?envType=problem-list-v2&envId=prefix-sum
 */

function minStartValue(nums: number[]): number {
  let minValue = 0;
  let currValue = 0;

  for (const num of nums) {
    currValue += num;
    minValue = Math.max(minValue, 0 - currValue + 1);
  }

  return minValue || 1;
}

//

describe('Minimum Value to Get Positive Step by Step Sum', () => {
  it('should pass basic cases', () => {
    expect(minStartValue([-3, 2, -3, 4, 2])).toEqual(5);
    expect(minStartValue([1, 2])).toEqual(1);
    expect(minStartValue([1, -2, -3])).toEqual(5);
  });
});
