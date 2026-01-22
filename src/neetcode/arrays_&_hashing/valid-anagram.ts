/**
 * Valid Anagram
 * https://neetcode.io/problems/is-anagram/question?list=neetcode150
 *
 * Time Complexity: O(N + M)
 * Space Complexity: O(1) only English characters
 */

function isAnagram(s: string, t: string): boolean {
  const characters = new Map<string, number>();

  for (const char of s) {
    characters.set(char, (characters.get(char) || 0) + 1);
  }

  for (const char of t) {
    const entries = characters.get(char);
    // case 1: s имеет больше символов char
    if (!entries) return false;
    // continue
    if (entries === 1) characters.delete(char);
    else characters.set(char, entries - 1);
  }

  return characters.size === 0;
}

//
//

describe('Valid Anagram', () => {
  test('basic cases', () => {
    expect(isAnagram('racecar', 'carrace')).toEqual(true);
    expect(isAnagram('jar', 'jam')).toEqual(false);
  });
});
