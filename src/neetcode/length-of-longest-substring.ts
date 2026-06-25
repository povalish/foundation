/**
 * Longest Substring Without Repeating Characters
 * https://neetcode.io/problems/longest-substring-without-duplicates/question?list=neetcode150
 */

function lengthOfLongestSubstring(s: string): number {
  let maxLength = 1;

  let pLeft = 0;
  let pRight = 0;

  const window = new Map<string, number>();

  while (pRight < s.length) {
    if (window.has(s[pRight])) {
      const prevIndex = window.get(s[pRight])!;
      window.set(s[pRight], pRight);
      pLeft = prevIndex + 1;
    } else {
      window.set(s[pRight], pRight);
    }

    maxLength = Math.max(pRight - pLeft + 1);
    pRight++;
  }

  return maxLength;
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
 * maxLength - 3 (pRight - pLeft)
 * window - { z:0 | x:1 | y:2 }
 *
 * z - [x - y - z] - x
 */
