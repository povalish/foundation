/**
 * 4Sum
 * https://neetcode.io/problems/4sum/question?list=neetcode250
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 */

function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return [];

  nums.sort((a, b) => a - b);

  const len = nums.length;
  const result: number[][] = [];

  let index1 = 0;

  while (index1 < len) {
    let index2 = index1 + 1;

    while (index2 < len - 2) {
      let leftIndex = index2 + 1;
      let rightIndex = len - 1;

      while (leftIndex < rightIndex) {
        const sum = nums[index1] + nums[index2] + nums[leftIndex] + nums[rightIndex];

        if (sum < target) leftIndex += 1;
        else if (sum > target) rightIndex -= 1;
        else {
          result.push([nums[index1], nums[index2], nums[leftIndex], nums[rightIndex]]);
          leftIndex += 1;
          rightIndex -= 1;

          while (leftIndex < len && nums[leftIndex] === nums[leftIndex - 1]) leftIndex += 1;
          while (rightIndex > 0 && nums[rightIndex] === nums[rightIndex + 1]) rightIndex -= 1;
        }
      }

      index2 += 1;
      while (index1 < len && nums[index2] === nums[index2 - 1]) index2 += 1;
    }

    index1 += 1;
    while (index1 > 0 && nums[index1] === nums[index1 - 1]) index1 += 1;
  }

  return result;
}

// fourSum([-5, -4, -3, -2, -1], -10);

//

describe('4Sum', () => {
  it('should pass basic cases', () => {
    expect(fourSum([3, 2, 3, -3, 1, 0], 3)).toEqual([
      [-3, 0, 3, 3],
      [-3, 1, 2, 3],
    ]);
    expect(fourSum([1, -1, 1, -1, 1, -1], 2)).toEqual([[-1, 1, 1, 1]]);
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
    expect(fourSum([-5, -4, -3, -2, -1], -10)).toEqual([[-4, -3, -2, -1]]);
  });
});
