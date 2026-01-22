/**
 * Determine if String Halves Are Alike
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function halvesAreAlike(s: string): boolean {
  let leftPartCount = 0;
  let rightPartCount = 0;

  const vowels: Record<string, boolean> = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels[s[i]]) leftPartCount += 1;
    if (vowels[s[s.length - 1 - i]]) rightPartCount += 1;
  }

  return leftPartCount === rightPartCount;
}

//
//

describe('Determine if String Halves Are Alike', () => {
  test('simple cases', () => {
    let s = 'book';
    expect(halvesAreAlike(s)).toEqual(true);

    s = 'textbook';
    expect(halvesAreAlike(s)).toEqual(false);
  });
});
