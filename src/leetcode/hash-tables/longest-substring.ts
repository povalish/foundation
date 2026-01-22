function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  const map: Map<string, boolean> = new Map();
  let maxSize = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      maxSize = Math.max(map.size, maxSize);

      for (const [key] of map) {
        map.delete(key);
        if (key === s[i]) {
          break;
        }
      }
    }

    map.set(s[i], true);
  }

  return Math.max(map.size, maxSize);
}

//
//

describe('Longest Substring Without Repeating Characters', () => {
  test('base cases', () => {
    let s = 'abcabcbb';
    expect(lengthOfLongestSubstring(s)).toEqual(3);

    s = 'bbbbb';
    expect(lengthOfLongestSubstring(s)).toEqual(1);

    s = 'pwwkew';
    expect(lengthOfLongestSubstring(s)).toEqual(3);

    s = 'pwkkew';
    expect(lengthOfLongestSubstring(s)).toEqual(3);

    s = 'dvdf';
    expect(lengthOfLongestSubstring(s)).toEqual(3);

    s = 'cdd';
    expect(lengthOfLongestSubstring(s)).toEqual(2);

    s = 'aabaab!bb';
    expect(lengthOfLongestSubstring(s)).toEqual(3);

    s = 'ggububgvfk';
    expect(lengthOfLongestSubstring(s)).toEqual(6);
  });
});

// lengthOfLongestSubstring('dvdf');
