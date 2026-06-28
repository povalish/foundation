/**
 * Substrings of Size Three with Distinct Characters
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/?envType=problem-list-v2&envId=sliding-window
 */

function countGoodSubstrings(s: string): number {
  let goodCounter = 0;
  const wFreq = new Map<string, number>();

  const getIsGoodWindow = (): boolean => {
    for (const counter of wFreq.values()) {
      if (counter > 1) return false;
    }
    return true;
  };

  let pLeft = 0;
  let pRight = 0;

  while (pRight < 3) {
    const char = s[pRight];
    const freq = wFreq.get(char) ?? 0;
    wFreq.set(char, freq + 1);
    pRight++;
  }

  if (getIsGoodWindow()) goodCounter++;

  while (pRight < s.length) {
    // Adjust left char
    const leftChar = s[pLeft];
    const leftCharCount = wFreq.get(leftChar) ?? 0;
    if (leftCharCount <= 1) wFreq.delete(leftChar);
    else wFreq.set(leftChar, leftCharCount - 1);

    // Adjust right char
    const rightChar = s[pRight];
    const rightCharCount = wFreq.get(rightChar) ?? 0;
    wFreq.set(rightChar, rightCharCount + 1);

    if (getIsGoodWindow()) goodCounter++;

    pLeft++;
    pRight++;
  }

  return goodCounter;
}

//

// countGoodSubstrings('aababcabc');

describe('Substrings of Size Three with Distinct Characters', () => {
  it('should pass basic cases', () => {
    expect(countGoodSubstrings('xyzzaz')).toEqual(1);
    expect(countGoodSubstrings('aababcabc')).toEqual(4);
  });
});

/**
 * goodCounter - 0
 * wFreq - { - | - | - }
 * x - y - z - [z - a - z]
 * a - a - b - a - b - c - a - b - c
 */
