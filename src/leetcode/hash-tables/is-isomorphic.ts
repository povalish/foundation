/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but a character
 * may map to itself.
 *
 * Space Complextiry: O(1)  alphabet letters is a constant number
 * Time Complexity: O(N)
 *
 * #hash-tables #strings
 */

function isIsomorphic(s: string, t: string): boolean {
  const map: Record<string, string> = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    // does not contains latter
    if (!map[s[i]]) {
      const isAlreadyExists = Object.values(map).includes(t[i]);
      if (isAlreadyExists) {
        return false;
      }

      map[s[i]] = t[i];
    }

    if (map[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
}

//
//

describe('isomorphic strings', () => {
  test('should return `true`', () => {
    const s = 'paper';
    const t = 'title';
    const result = isIsomorphic(s, t);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const s = 'foo';
    const t = 'bar';
    const result = isIsomorphic(s, t);
    expect(result).toEqual(false);
  });
});
