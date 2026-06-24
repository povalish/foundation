/**
 * Defuse the Bomb
 * https://leetcode.com/problems/defuse-the-bomb/description/
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

const circle = (i: number, len: number): number => i % len;

function decrypt(code: number[], k: number): number[] {
  if (k === 0) return code.map(() => 0);

  const encoded: number[] = [];

  let windowSum = 0;
  let windowStart = 1;
  let windowEnd = k;

  if (k < 0) {
    windowStart = circle(code.length - Math.abs(k), code.length);
    windowEnd = circle(code.length - 1, code.length);
  }

  // Prebuild window
  for (let i = windowStart; i <= windowEnd; i++) {
    windowSum += code[i];
  }

  // Move window
  let currIdx = 0;
  while (currIdx < code.length) {
    encoded.push(windowSum);
    windowSum -= code[circle(windowStart, code.length)];
    windowSum += code[circle(windowEnd + 1, code.length)];
    windowStart++;
    windowEnd++;
    currIdx++;
  }

  return encoded;
}

//

// decrypt([5, 7, 1, 4], 3);

describe('Defuse the Bomb', () => {
  it('should pass basic cases', () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });
});

/**
 * k -
 * start -
 * end -
 *
 * k > 0
 * start - (i + 1) % code.len
 * end = (i + k) % code.len
 *
 * K < 0
 * start = (i + len - k) % code.len
 * end = (i + len - 1) % code.len
 */
