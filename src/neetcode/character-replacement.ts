/**
 * Longest Repeating Character Replacement
 * https://neetcode.io/problems/longest-repeating-substring-with-replacement/question?list=neetcode150
 */

function characterReplacement(s: string, k: number): number {
  let maxLength = 0;
  const freq = new Map<string, number>();

  let pLeft = 0;
  let pRight = 0;

  let mostSeenCharLength = 1;

  while (pRight < s.length) {
    const count = freq.get(s[pRight]) ?? 0;
    freq.set(s[pRight], count + 1);

    mostSeenCharLength = Math.max(mostSeenCharLength, count + 1);

    while (pRight - pLeft + 1 - mostSeenCharLength > k) {
      const prevCount = freq.get(s[pLeft])!;
      freq.set(s[pLeft], prevCount - 1);
      pLeft++;
    }

    maxLength = Math.max(maxLength, pRight - pLeft + 1);
    pRight++;
  }

  return maxLength;
}

//

// characterReplacement('AAABABB', 1);

describe('Longest Repeating Character Replacement', () => {
  it('should pass basic cases', () => {
    expect(characterReplacement('XYYX', 2)).toEqual(4);
    expect(characterReplacement('AAABABB', 1)).toEqual(5);
  });
});

/**
 * k = 2
 * maxLenght - 1 (pRight - pLeft)
 * window - {  }
 * most freq - 0
 * all elements - 2
 * diff - 0
 *
 * A - A - A - B - C - C - A - A - A - A - A - A - A
 */
