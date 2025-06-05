/**
 * Write a function that accepts a string with
 * all but one letter of the alphabet and returns that missing letter.
 *
 * Complexity: O(N)
 *
 * #hash-tables
 */

function hasAllLetters(str: string): string | boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz ';
  const map: Record<string, boolean> = {};

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = true;
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (!map[alphabet[i]]) {
      return alphabet[i];
    }
  }

  return true;
}

describe('is string contains all english letters', () => {
  test('should return `f`', () => {
    const str = 'the quick brown box jumps over a lazy dog';
    const result = hasAllLetters(str);
    expect(result).toEqual('f');
  });

  test('should return `true', () => {
    const str = 'the quick brown box jumps over a lazy dog f';
    const result = hasAllLetters(str);
    expect(result).toEqual(true);
  });
});
