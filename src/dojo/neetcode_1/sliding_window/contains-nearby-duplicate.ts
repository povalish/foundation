/**
 * Contains Duplicate II
 * https://neetcode.io/problems/contains-duplicate-ii/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const windowCache = new Map<number, boolean>();

  let start = 0;
  let end = 0;

  while (end < nums.length) {
    if (end - start > k) {
      windowCache.delete(nums[start]);
      start++;
    }

    if (windowCache.has(nums[end])) return true;
    windowCache.set(nums[end], true);
    end++;
  }

  return false;
}

//

// containsNearbyDuplicate([1, 2, 3, 1], 3);

describe('Contains Duplicate II', () => {
  it('should pass basic cases', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true);
    expect(containsNearbyDuplicate([1, 2, 3, 1], 2)).toEqual(false);
    expect(containsNearbyDuplicate([1, 2, 1], 1)).toEqual(false);
  });
});
