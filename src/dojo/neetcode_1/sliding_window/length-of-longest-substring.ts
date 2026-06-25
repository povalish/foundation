/**
 * Longest Substring Without Repeating Characters
 * https://neetcode.io/problems/longest-substring-without-duplicates/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function lengthOfLongestSubstring(s: string): number {
  const windowCache = new Map<string, number>();
  let windowUniqueResult = 0;

  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!windowCache.has(s[right])) {
      windowCache.set(s[right], right);
    } else {
      const prevIndex = windowCache.get(s[right])!;
      left = Math.max(left, prevIndex + 1);
      windowCache.set(s[right], right);
    }

    right++;
    windowUniqueResult = Math.max(windowUniqueResult, right - left);
  }

  return windowUniqueResult;
}

//

// lengthOfLongestSubstring('zxyzxyz');

describe('Longest Substring Without Repeating Characters', () => {
  it('should pass basic cases', () => {
    expect(lengthOfLongestSubstring('zxyzxyz')).toEqual(3);
    expect(lengthOfLongestSubstring('xxxx')).toEqual(1);
  });
});

/**
 * { }
 * count = 0
 *
 * left - 0
 * right - 0
 *
 * z - [x - y - z] - x - y - z
 */
