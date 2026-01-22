/**
 * Longer Contiguous Segments of Ones than Zeros
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description
 *
 * Time Complexity: O(N)
 * Space COmplexity: O(1)
 */

type Segment = {
  current: number;
  max: number;
};

function checkZeroOnes(s: string): boolean {
  const counter: Record<string, Segment> = {
    '0': { current: 0, max: 0 },
    '1': { current: 0, max: 0 },
  };

  let savedChar = s[0];
  for (const currentChar of s) {
    if (currentChar === savedChar) {
      counter[currentChar].current += 1;
    }

    if (currentChar !== savedChar) {
      counter[savedChar].max = Math.max(counter[savedChar].current, counter[savedChar].max);
      counter[savedChar].current = 0;

      counter[currentChar].current = 1;
      savedChar = currentChar;
    }
  }

  counter[savedChar].max = Math.max(counter[savedChar].current, counter[savedChar].max);

  return counter['1'].max > counter['0'].max;
}

//
//

describe('Longer Contiguous Segments of Ones than Zeros', () => {
  test('simple cases', () => {
    expect(checkZeroOnes('1101')).toEqual(true);
    expect(checkZeroOnes('111000')).toEqual(false);
    expect(checkZeroOnes('110100010')).toEqual(false);
    expect(checkZeroOnes('011000111')).toEqual(false);
  });
});
