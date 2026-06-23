/**
 * Longest Substring Without Repeating Characters
 * https://neetcode.io/problems/longest-substring-without-duplicates/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function lengthOfLongestSubstring(s: string): number {
  let maxRepeatingChars = 1;
  const windowCache = new Map<string, number>(); // char - idx

  let startIdx = 0;
  let endIdx = 0;

  while (endIdx < s.length) {
    if (windowCache.has(s[endIdx])) {
      startIdx = Math.max(windowCache.get(s[endIdx])! + 1, startIdx);
    }

    windowCache.set(s[endIdx], endIdx);
    maxRepeatingChars = Math.max(maxRepeatingChars, endIdx - startIdx + 1);
    endIdx++;
  }

  return maxRepeatingChars;
}

//

// lengthOfLongestSubstring('abba');

describe('Longest Substring Without Repeating Characters', () => {
  it('should pass basic cases', () => {
    expect(lengthOfLongestSubstring('zxyzxyz')).toEqual(3);
    expect(lengthOfLongestSubstring('xxxx')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('au')).toEqual(2);
  });
});

/**
 * { p:0 | w:1 }
 * [p] - w - (w) - k - e - w
 */
