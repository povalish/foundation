/**
 * Find All Anagrams in a String
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/?envType=problem-list-v2&envId=sliding-window
 */

function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];

  const pFreq = new Map<string, number>();
  const wFreq = new Map<string, number>();

  let pLeft = 0;
  let pRight = 0;

  let diff = 0;

  // Build freq
  //

  for (const char of p) {
    pFreq.set(char, (pFreq.get(char) ?? 0) + 1);
  }

  diff = pFreq.size;

  // Build window and calc diff
  //

  for (const char of s.slice(0, p.length)) {
    const pCount = pFreq.get(char) ?? 0;
    const wCount = wFreq.get(char) ?? 0;

    wFreq.set(char, wCount + 1);

    if (wCount + 1 === pCount) diff--;
    else if (wCount === pCount) diff++;

    if (diff === 0) result.push(0);
  }

  // Move window
  //

  pLeft = 0;
  pRight = p.length;

  while (pRight < s.length) {
    // Adjust right side
    const rightPCount = pFreq.get(s[pRight]) ?? 0;
    const rightWCount = wFreq.get(s[pRight]) ?? 0;

    wFreq.set(s[pRight], rightWCount + 1);

    if (rightWCount + 1 === rightPCount) diff--;
    else if (rightWCount === rightPCount) diff++;

    // Adjust left side
    const leftPCount = pFreq.get(s[pLeft]) ?? 0;
    const leftWCount = wFreq.get(s[pLeft]) ?? 0;

    if (leftWCount === 1) wFreq.delete(s[pLeft]);
    else wFreq.set(s[pLeft], leftWCount - 1);

    if (leftWCount - 1 === leftPCount) diff--;
    else if (leftWCount === leftPCount) diff++;

    if (diff === 0) result.push(pLeft + 1);

    pLeft++;
    pRight++;
  }

  return result;
}

//

// findAnagrams('cbaebabacd', 'abc');

describe('Find All Anagrams in a String', () => {
  it('should pass basic cases', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
  });
});

/**
 * [0, ]
 * pFreq - { a:1 | b:1 | c:1 }
 * window - { c:1 | b:1 | a:1 | e:1 }
 *
 * diff - 1
 *
 * [c - b - a - e] - b
 */
