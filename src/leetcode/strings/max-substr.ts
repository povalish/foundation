/**
 * Maximum Length Substring With Two Occurrences
 * https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description
 */

// function maximumLengthSubstring(s: string, start = 0): number {
//   if (start === s.length - 1) return 0;

//   let occurrCount = 0;
//   const occurrMap: Record<string, number> = {};

//   for (const letter of s) {
//     if (!occurrMap[letter]) occurrMap[letter] = 1;
//     else if (occurrMap[letter] === 1) occurrMap[letter] = occurrMap[letter] + 1;
//     else break;
//     occurrCount += 1;
//   }

//   return Math.max(occurrCount, maximumLengthSubstring(s.slice(start + 1)));
// }

function maximumLengthSubstring(s: string): number {
  const map: Record<string, number> = {};
  let result = 0;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const rightChat = s[right];
    map[rightChat] = (map[rightChat] || 0) + 1;

    while (map[rightChat] > 2) {
      const leftChar = s[left];
      map[leftChar] = map[leftChar] - 1;
      left += 1;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}

//
//

describe('', () => {
  test('simple cases', () => {
    let s = 'bcbbbcba';
    expect(maximumLengthSubstring(s)).toEqual(4);

    s = 'aaaa';
    expect(maximumLengthSubstring(s)).toEqual(2);
  });

  test('advanced cases', () => {});
});
