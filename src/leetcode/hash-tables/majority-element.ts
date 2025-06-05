/**
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(log N)
 */

function majorityElement(nums: number[]): number {
  const map: Record<number, number> = {};
  let major = [nums[0], 0]; // element, count

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;

      if (map[nums[i]] > major[1]) {
        major = [nums[i], map[nums[i]]];
      }
    }
  }

  return major[0];
}

describe('majority element in array', () => {
  test('should return `3`', () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    expect(result).toEqual(3);
  });

  test('should return `2`', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    expect(result).toEqual(2);
  });
});
