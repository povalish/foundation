/**
 * Valid Palindrome II
 * https://neetcode.io/problems/valid-palindrome-ii/question?list=neetcode250
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function isPalindrome(s: string): boolean {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) return false;
    leftIndex += 1;
    rightIndex -= 1;
  }

  return true;
}

function validPalindrome(s: string): boolean {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) {
      const isCorrectWithoutLeftChar = isPalindrome(s.slice(0, leftIndex) + s.slice(leftIndex + 1));
      const isCorrectWithoutRightChar = isPalindrome(s.slice(0, rightIndex) + s.slice(rightIndex + 1));
      return isCorrectWithoutLeftChar || isCorrectWithoutRightChar;
    }

    leftIndex += 1;
    rightIndex -= 1;
  }

  return true;
}

//

describe('Valid Palindrome II', () => {
  it('should pass basic cases', () => {
    expect(validPalindrome('aca')).toEqual(true);
    expect(validPalindrome('abc')).toEqual(false);
    expect(validPalindrome('abbc')).toEqual(false);
    expect(validPalindrome('abbadc')).toEqual(false);
    expect(validPalindrome('abbda')).toEqual(true);
    expect(validPalindrome('acdccba')).toEqual(false);
    expect(validPalindrome('eceec')).toEqual(true);
    expect(validPalindrome('ceece')).toEqual(true);
  });
});
