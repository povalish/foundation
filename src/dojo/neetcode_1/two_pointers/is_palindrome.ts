/**
 * Valid Palindrome
 * https://neetcode.io/problems/is-palindrome/question?list=neetcode150
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const isAlphanumeric = (str: string): boolean => /^[a-zA-Z0-9]$/.test(str);

function isPalindrome(s: string): boolean {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    if (!isAlphanumeric(s[leftIndex])) {
      leftIndex += 1;
      continue;
    }

    if (!isAlphanumeric(s[rightIndex])) {
      rightIndex -= 1;
      continue;
    }

    if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
      return false;
    }

    leftIndex += 1;
    rightIndex -= 1;
  }

  return true;
}

//

describe('Valid Palindrome', () => {
  it('should pass basic tests', () => {
    // expect(isPalindrome('Was it a car or a cat I saw?')).toEqual(true);
    // expect(isPalindrome('tab a cat')).toEqual(false);
    expect(isPalindrome('No lemon, no melon')).toEqual(true);
  });
});
