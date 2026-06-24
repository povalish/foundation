/**
 * Contains Duplicate II
 * https://neetcode.io/problems/contains-duplicate-ii/question?list=allNC
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const windowCache = new Map<number, boolean>();

  // Build window
  for (let i = 0; i <= k; i++) {
    if (windowCache.has(nums[i])) return true;
    else windowCache.set(nums[i], true);
  }

  let start = 0;
  let end = k + 1;

  while (end < nums.length) {
    windowCache.delete(nums[start]);
    if (windowCache.has(nums[end])) return true;
    else windowCache.set(nums[end], true);

    start++;
    end++;
  }

  return false;
}

//

// containsNearbyDuplicate([1, 2, 3, 1], 2);

describe('Contains Duplicate II', () => {
  it('should pass basic cases', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true);
    expect(containsNearbyDuplicate([2, 1, 2], 1)).toEqual(false);
  });
});
