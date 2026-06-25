/**
 * Reverse String
 * https://neetcode.io/problems/reverse-string/question?list=neetcode250
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function reverseString(s: string[]): string[] {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}

//

// reverseString(['n', 'e', 'e', 't']);

describe('Reverse String', () => {
  it('should pass basic cases', () => {
    expect(reverseString(['n', 'e', 'e', 't'])).toEqual(['t', 'e', 'e', 'n']);
    expect(reverseString(['r', 'a', 'c', 'e', 'c', 'a', 'r'])).toEqual(['r', 'a', 'c', 'e', 'c', 'a', 'r']);
  });
});
