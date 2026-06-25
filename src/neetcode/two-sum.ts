/**
 * Two Integer Sum II
 * https://neetcode.io/problems/two-integer-sum-ii/question?list=neetcode150
 */

function twoSum(numbers: number[], target: number): number[] {
  let pLeft = 0;
  let pRight = numbers.length - 1;

  while (pLeft < pRight) {
    const sum = numbers[pLeft] + numbers[pRight];

    if (sum === target) return [pLeft + 1, pRight + 1];
    else if (sum < target) pLeft++;
    else pRight--;
  }

  return [-1, -1];
}

//

describe('Two Integer Sum II', () => {
  it('should pass basic cases', () => {
    expect(twoSum([1, 2, 3, 4], 3)).toEqual([1, 2]);
  });
});
