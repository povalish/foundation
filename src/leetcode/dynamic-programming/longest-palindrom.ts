/**
 * Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function longestPalindrome(s: string): string {
  if (s.length === 1) return s[0];
  if (s.length === 2) return s[0] === s[1] ? s : s[0];

  let palindrome = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      let iLeft = i - 1;
      let iRight = i;

      let searchEvenPalindrome = s[iLeft] + s[iRight];

      while (iLeft > 0 && iRight < s.length - 1) {
        iLeft -= 1;
        iRight += 1;

        if (s[iLeft] === s[iRight]) {
          searchEvenPalindrome = s[iLeft] + searchEvenPalindrome + s[iRight];
        } else {
          break;
        }
      }

      if (searchEvenPalindrome.length > palindrome.length) {
        palindrome = searchEvenPalindrome;
      }
    }

    if (s[i - 1] === s[i + 1]) {
      let iLeft = i - 1;
      let iRight = i + 1;

      let searchOddPalindrome = s[iLeft] + s[i] + s[iRight];

      while (iLeft > 0 && iRight < s.length - 1) {
        iLeft -= 1;
        iRight += 1;

        if (s[iLeft] === s[iRight]) {
          searchOddPalindrome = s[iLeft] + searchOddPalindrome + s[iRight];
        } else {
          break;
        }
      }

      if (searchOddPalindrome.length > palindrome.length) {
        palindrome = searchOddPalindrome;
      }
    }
  }

  return palindrome;
}

//
//

describe('Longest Palindrom Substring', () => {
  test.skip('should pass simple cases', () => {
    let s = 'babad';
    expect(longestPalindrome(s)).toEqual('bab');

    s = 'cbbddd';
    expect(longestPalindrome(s)).toEqual('ddd');

    s = 'cbbbbddd';
    expect(longestPalindrome(s)).toEqual('bbbb');

    s = 'aabcd';
    expect(longestPalindrome(s)).toEqual('aa');

    s = 'ccc';
    expect(longestPalindrome(s)).toEqual('ccc');

    s = 'cccc';
    expect(longestPalindrome(s)).toEqual('cccc');

    s = 'abb';
    expect(longestPalindrome(s)).toEqual('bb');
  });

  test('should pass advanced cases', () => {
    const s = 'abb';
    expect(longestPalindrome(s)).toEqual('bb');
  });
});
