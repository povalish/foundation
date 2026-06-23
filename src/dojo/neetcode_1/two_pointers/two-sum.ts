/**
 * Two Integer Sum II
 * https://neetcode.io/problems/two-integer-sum-ii/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space ComplexityL O(1)
 */

function twoSum(numbers: number[], target: number): number[] {
  if (numbers.length === 2) return [1, 2];

  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const current = numbers[leftPointer] + numbers[rightPointer];

    if (current > target) rightPointer -= 1;
    else if (current < target) leftPointer += 1;
    else return [leftPointer + 1, rightPointer + 1];
  }

  return [-1, -1];
}

//

describe('Two Integer Sum II', () => {
  it('should pass basic cases', () => {
    expect(twoSum([1, 2, 3, 4, 1000], 3)).toEqual([1, 2]);
  });
});
