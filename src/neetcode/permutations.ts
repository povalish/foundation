/**
 * Permutation in String
 * https://neetcode.io/problems/permutation-string/question?list=neetcode150
 */

function checkInclusion(s1: string, s2: string): boolean {
  const wLen = s1.length;
  const wFreq = new Map<string, number>();
  const s1Freq = new Map<string, number>();

  let pLeft = 0;
  let pRight = 0;

  let diff = s1.length;

  // Build s1 freq
  //

  for (const char of s1) {
    s1Freq.set(char, (s1Freq.get(char) ?? 0) + 1);
  }

  // Build window freq and move pRight = s1.length
  //

  while (pRight < wLen) {
    const wCount = wFreq.get(s2[pRight]) ?? 0;
    const s1Count = s1Freq.get(s2[pRight]) ?? 0;

    if (wCount + 1 === s1Count) diff--;
    else if (wCount === s1Count) diff++;

    wFreq.set(s2[pRight], wCount + 1);

    pRight++;
  }

  // Move window and adjust diff
  //

  while (pRight < s2.length) {
    // Adding at right of window
    const rightS1Count = s1Freq.get(s2[pRight]) ?? 0;
    const rightWCount = wFreq.get(s2[pRight]) ?? 0;

    wFreq.set(s2[pRight], rightWCount + 1);

    if (rightWCount + 1 === rightS1Count) diff--;
    else if (rightWCount === rightS1Count) diff++;

    // removing at left of window
    const leftS1Count = s1Freq.get(s2[pLeft]) ?? 0;
    const leftWCount = wFreq.get(s2[pLeft]) ?? 0;

    if (leftWCount <= 1) wFreq.delete(s2[pLeft]);
    else wFreq.set(s2[pLeft], leftS1Count - 1);

    if (leftWCount - 1 === leftS1Count) diff--;
    else if (leftWCount === leftS1Count) diff++;

    if (diff === 0) return true;

    pLeft++;
    pRight++;
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

/**
 * s1 - { a:1 | b:1 | c:1 }
 * window - { l:1 | e:1 | c:1 | a:1 }
 *
 * diff - 1
 * l - e - [c - a - b]
 */
