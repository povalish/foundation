/**
 * Contains Duplicate
 * https://neetcode.io/problems/duplicate-integer/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

export function hasDuplicate(nums: number[]): boolean {
  const duplicates = new Map<number, boolean>();

  for (const num of nums) {
    if (duplicates.has(num)) return true;
    duplicates.set(num, true);
  }

  return false;
}

//
//

describe('Contains Duplicate', () => {
  test('basic cases', () => {
    expect(hasDuplicate([1, 2, 3, 3])).toEqual(true);
    expect(hasDuplicate([1, 2, 3, 4])).toEqual(false);
  });
});
