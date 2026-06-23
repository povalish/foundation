/**
 * Longest Repeating Character Replacement
 * https://neetcode.io/problems/longest-repeating-substring-with-replacement/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

function characterReplacement(s: string, k: number): number {
  const windowCache = new Map<string, number>();

  let leftIndex = 0;
  let rightIndex = 0;

  let maxRepeatingCharsCount = 0;
  let maxFreqCharCount = 0;

  while (rightIndex < s.length) {
    windowCache.set(s[rightIndex], (windowCache.get(s[rightIndex]) ?? 0) + 1);
    maxFreqCharCount = Math.max(maxFreqCharCount, windowCache.get(s[rightIndex])!);

    while (rightIndex - leftIndex + 1 - maxFreqCharCount > k) {
      windowCache.set(s[leftIndex], windowCache.get(s[leftIndex])! - 1);
      leftIndex++;
    }

    maxRepeatingCharsCount = Math.max(maxRepeatingCharsCount, rightIndex - leftIndex + 1);
    rightIndex++;
  }

  return maxRepeatingCharsCount;
}

//

// characterReplacement('BAABAABZCCCACCC', 1);

describe('Longest Repeating Character Replacement', () => {
  it('should pass basic cases', () => {
    expect(characterReplacement('XYYX', 2)).toEqual(4);
    expect(characterReplacement('AAABABB', 1)).toEqual(5);
    expect(characterReplacement('BAABAABZCCCACCC', 1)).toEqual(7);
  });
});

/**
 * right - left + 1 - repeatCount < k
 * --
 *
 * { B:1 | A:2 }
 * B - A - A - B - A - A - B
 */
