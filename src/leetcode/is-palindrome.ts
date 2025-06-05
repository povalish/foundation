/**
 * Is provided string a palindrome?
 * Compexity: O(N / 2)
 *
 * #palindrome
 */

function isPalindrome(str: string): boolean {
  if (str.length % 2 === 0) {
    return false;
  }

  const withoutSpaces = str.replaceAll(' ', '');
  const middleIndex = (withoutSpaces.length - 1) / 2;

  for (let i = 1; i < withoutSpaces.length / 2 - 1; i++) {
    if (withoutSpaces[middleIndex + 1] !== withoutSpaces[middleIndex - 1]) {
      return false;
    }
  }

  return true;
}

//
//

describe('is palindrome', () => {
  test('should return correct result', () => {
    let str = 'ABOBA';
    let result = isPalindrome(str);
    expect(result).toEqual(true);

    str = 'Лёша на полке клопа нашёл';
    result = isPalindrome(str);
    expect(result).toEqual(true);
  });
});
