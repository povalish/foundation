/**
 * Write a function that returns the first non-repeating
 * character in a string. For example, there are two non—repeating
 * characters in the string "minimum" - "n" and "u", so your function
 * should return "n", since it occurs first.
 *
 * Compexity: O(2N)
 *
 * #hash-tables
 */

export function hasNonrepeating(str: string[]): string | boolean {
  const map: Record<string, number> = {};

  str.forEach((letter) => {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  });

  for (const letter in map) {
    if (map[letter] === 1) {
      return letter;
    }
  }

  return false;
}

//
//

describe('has non-repeating characters', () => {
  test('should return `n`', () => {
    const str = 'minimum';
    const result = hasNonrepeating(str.split(''));
    expect(result).toEqual('n');
  });

  test('should return `false`', () => {
    const str = 'mmiinn';
    const result = hasNonrepeating(str.split(''));
    expect(result).toEqual(false);
  });
});
