/**
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function firstUniqChar(s: string): number {
  const mapCharactersToCount = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (!mapCharactersToCount.has(s[i])) {
      mapCharactersToCount.set(s[i], 1);
    } else {
      const count = mapCharactersToCount.get(s[i])!;
      mapCharactersToCount.set(s[i], count + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (mapCharactersToCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

//
//

describe('first unique character', () => {
  test('should return `0`', () => {
    const s = 'leetcode';
    const result = firstUniqChar(s);
    expect(result).toEqual(0);
  });

  test('should return `2`', () => {
    const s = 'loveleetcode';
    const result = firstUniqChar(s);
    expect(result).toEqual(2);
  });

  test('should return `-1`', () => {
    const s = 'aabb';
    const result = firstUniqChar(s);
    expect(result).toEqual(-1);
  });
});
