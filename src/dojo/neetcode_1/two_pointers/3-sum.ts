/**
 * 3Sum
 * https://neetcode.io/problems/three-integer-sum/question?list=neetcode150
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  let index = 0;

  while (index < nums.length) {
    while (index > 0 && nums[index] === nums[index - 1]) index += 1;

    let rightIndex = nums.length - 1;
    let leftIndex = index + 1;

    while (leftIndex < rightIndex) {
      const sum = nums[index] + nums[leftIndex] + nums[rightIndex];

      if (sum < 0) leftIndex += 1;
      else if (sum > 0) rightIndex -= 1;
      else {
        result.push([nums[index], nums[leftIndex], nums[rightIndex]]);
        leftIndex += 1;
        rightIndex -= 1;
      }

      while (nums[rightIndex] === nums[rightIndex + 1]) rightIndex -= 1;
      while (nums[leftIndex] === nums[leftIndex - 1]) leftIndex += 1;
    }

    index += 1;
  }

  return result;
}

// threeSum([-1, 0, 1, 2, -1, -4]);

//

describe('3Sum', () => {
  it('should pass basic cases', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([0, 1, 1])).toEqual([]);
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
