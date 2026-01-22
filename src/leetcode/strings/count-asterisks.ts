/**
 * Count Asterisks
 * https://leetcode.com/problems/count-asterisks/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function countAsterisks(s: string): number {
  let isInPair = false;
  let count = 0;

  for (const char of s) {
    if (char === '|' && !isInPair) {
      isInPair = true;
      continue;
    }

    if (char === '|' && isInPair) {
      isInPair = false;
      continue;
    }

    if (char === '*' && !isInPair) {
      count += 1;
    }
  }

  return count;
}

//
//

describe('Count Asterisks', () => {
  test('simple cases', () => {
    expect(countAsterisks('l|*e*et|c**o|*de|')).toEqual(2);
    expect(countAsterisks('iamprogrammer')).toEqual(0);
    expect(countAsterisks('yo|uar|e**|b|e***au|tifu|l')).toEqual(5);
  });
});
