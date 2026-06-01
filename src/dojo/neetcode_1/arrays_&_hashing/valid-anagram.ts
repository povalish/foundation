function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const entries = new Map<string, number>();

  // count characters
  for (const char of s) {
    entries.set(char, (entries.get(char) ?? 0) + 1);
  }

  // exclude same characters
  for (const char of t) {
    if (!entries.has(char)) return false;
    entries.set(char, entries.get(char)! - 1);
    if (entries.get(char) === 0) entries.delete(char);
  }

  return entries.size === 0;
}

//
//

describe('Valid Anagram', () => {
  it('should pass tests', () => {
    expect(isAnagram('racecar', 'carrace')).toEqual(true);
    expect(isAnagram('jar', 'jam')).toEqual(false);
  });
});
