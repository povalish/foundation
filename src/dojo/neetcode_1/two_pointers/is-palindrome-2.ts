/**
 * Valid Palindrome II
 * https://neetcode.io/problems/valid-palindrome-ii/question?list=neetcode250
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function isPalindrome(s: string, l: number, r: number): boolean {
  let left = l;
  let right = r;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      const isPalindromeLeftPart = isPalindrome(s, left + 1, right);
      const isPalindromeRightPart = isPalindrome(s, left, right - 1);
      return isPalindromeLeftPart || isPalindromeRightPart;
    }

    right--;
    left++;
  }

  return true;
}

//

// validPalindrome('eceec');

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
