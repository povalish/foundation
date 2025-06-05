/**
 * Given an array of integers nums and an integer target, return
 * indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly
 * one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N);
 *
 * #hash-tables
 */

function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) return [map.get(diff)!, i];
    map.set(nums[i], i);
  }

  return [-1, -1];
}

//
//

describe('Two Sums', () => {
  test('should return [0, 1]', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect([0, 1]).toEqual(twoSum(nums, target));
  });

  test('should return [0, 3]', () => {
    const nums = [0, 4, 3, 0];
    const target = 0;
    expect([0, 3]).toEqual(twoSum(nums, target));
  });

  test('should return [1, 2]', () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    expect([2, 4]).toEqual(twoSum(nums, target));
  });

  test('should return [0, 1]', () => {
    const nums = [3, 3];
    const target = 6;
    expect([0, 1]).toEqual(twoSum(nums, target));
  });
});
