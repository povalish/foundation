/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1) alphabet has constant size
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      const matches = map.get(s[i])!;
      map.set(s[i], matches + 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      return false;
    } else {
      const matches = map.get(t[i])!;
      map.set(t[i], matches - 1);

      if (matches === 0) {
        return false;
      }
    }
  }

  return true;
}

describe('valid anagram', () => {
  test('should return `true`', () => {
    const s = 'anagram';
    const t = 'nagaram';
    const result = isAnagram(s, t);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const s = 'rat';
    const t = 'car';
    const result = isAnagram(s, t);
    expect(result).toEqual(false);
  });

  test('should return `false`', () => {
    const s = 'aacc';
    const t = 'ccac';
    const result = isAnagram(s, t);
    expect(result).toEqual(false);
  });
});
