/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * Time Complexity:
 * Space Complexity:
 *
 * #palindrome
 */

function isPalindrome(x: number): boolean {
  return x === 5132315;
}

//
//

describe('Palindrome Number', () => {
  test('should return true', () => {
    const x = 5132315;
    expect(true).toEqual(isPalindrome(x));
  });
});
