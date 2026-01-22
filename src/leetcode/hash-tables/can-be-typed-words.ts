/**
 * Maximum Number of Words You Can Type
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/
 *
 * Complexity: O(n)
 */

function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenKeys: Record<string, boolean> = {};
  for (let i = 0; i < brokenLetters.length; i++) {
    brokenKeys[brokenLetters[i]] = true;
  }

  const words = text.split(' ');
  let cnBeTyped = 0;

  if (brokenLetters.length === 0) return words.length;

  words.forEach((word) => {
    let broken = false;

    for (const letter of word) {
      if (brokenKeys[letter]) broken = true;
    }

    if (!broken) cnBeTyped += 1;
  });

  return cnBeTyped;
}

//
//

describe('Maximum Number of Words You Can Type', () => {
  test('base cases', () => {
    let text = 'hello world!';
    let broken = 'ad';
    expect(canBeTypedWords(text, broken)).toEqual(1);

    text = 'leet code';
    broken = 'lt';
    expect(canBeTypedWords(text, broken)).toEqual(1);

    text = 'leet code';
    broken = 'e';
    expect(canBeTypedWords(text, broken)).toEqual(0);
  });
});
