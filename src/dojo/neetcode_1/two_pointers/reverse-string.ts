/**
 * Reverse String
 * https://neetcode.io/problems/reverse-string/question?list=neetcode250
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function reverseString(s: string[]): string[] {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    const saved = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = saved;

    leftIndex += 1;
    rightIndex -= 1;
  }

  return s;
}

//

describe('Reverse String', () => {
  it('should pass basic cases', () => {
    expect(reverseString(['n', 'e', 'e', 't'])).toEqual(['t', 'e', 'e', 'n']);
    expect(reverseString(['r', 'a', 'c', 'e', 'c', 'a', 'r'])).toEqual(['r', 'a', 'c', 'e', 'c', 'a', 'r']);
  });
});
