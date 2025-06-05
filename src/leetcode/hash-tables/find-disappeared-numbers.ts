/**
 * Given an array nums of n integers where nums[i]
 * is in the range [1, n], return an array of all the integers
 * ;in the range [1, n] that do not appear in nums.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N) not optimezed
 *
 * #hash-table #numbers #arrays
 */

function findDisappearedNumbers(nums: number[]): number[] {
  const allNumbers = new Map<number, boolean>();

  for (let i = 1; i <= nums.length; i++) {
    allNumbers.set(i, true);
  }

  for (let i = 0; i < nums.length; i++) {
    if (allNumbers.has(nums[i])) {
      allNumbers.delete(nums[i]);
    }
  }

  const result: number[] = [];

  for (const [key] of allNumbers) {
    result.push(key);
  }

  return result;
}

//
//

describe('find all disappeared numbers', () => {
  test('should return `[5,6]`', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = findDisappearedNumbers(nums);
    expect(result).toEqual([5, 6]);
  });

  test('should return `[2]`', () => {
    const nums = [1, 1];
    const result = findDisappearedNumbers(nums);
    expect(result).toEqual([2]);
  });
});
