/**
 * Permutation in String
 * https://neetcode.io/problems/permutation-string/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(m) m === s1.length
 */

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Freq = new Map<string, number>();
  const windowFreq = new Map<string, number>();

  // Fill s1Freq
  //

  for (const char of s1) {
    const prev = s1Freq.get(char) ?? 0;
    s1Freq.set(char, prev + 1);
  }

  let diff = s1Freq.size;

  // Fill window freq
  //

  for (const char of s2.slice(0, s1.length)) {
    const prev = windowFreq.get(char) ?? 0;
    const actual = s1Freq.get(char) ?? 0;

    if (actual === prev + 1) diff--;
    if (prev === actual) diff++;

    windowFreq.set(char, prev + 1);
  }

  // Move the window
  //

  let left = 0;
  let right = s1.length;

  while (right < s2.length) {
    // Removing element from the left
    //
    const prevLeft = windowFreq.get(s2[left]) ?? 0;
    const actualLeft = s1Freq.get(s2[left]) ?? 0;

    if (prevLeft - 1 === actualLeft) diff--;
    if (prevLeft === actualLeft) diff++;
    if (prevLeft - 1 <= 0) windowFreq.delete(s2[left]);

    // Adding element at the right
    //
    const prevRight = windowFreq.get(s2[right]) ?? 0;
    const actualRight = s1Freq.get(s2[right]) ?? 0;

    if (prevRight + 1 === actualRight) diff--;
    if (prevRight === actualRight) diff++;
    windowFreq.set(s2[right], prevRight + 1);

    if (diff === 0) return true;

    left++;
    right++;
  }

  return false;
}

//

// checkInclusion('abc', 'lecabee');

describe('Permutation in String', () => {
  it('should pass basic cases', () => {
    expect(checkInclusion('abc', 'lecabee')).toEqual(true);
    expect(checkInclusion('abc', 'lecaabee')).toEqual(false);
  });
});
