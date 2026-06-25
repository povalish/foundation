/**
 * Longest Repeating Character Replacement
 * https://neetcode.io/problems/longest-repeating-substring-with-replacement/question?list=neetcode150
 */

function characterReplacement(s: string, k: number): number {
  const maxLength = 0;
  const freq = new Map<string, number>();

  console.log(freq, s, k);

  return maxLength;
}

//

describe.skip('Longest Repeating Character Replacement', () => {
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
 *
 * A - A - A - B - C - C - A - A - A - A - A - A - A
 */
