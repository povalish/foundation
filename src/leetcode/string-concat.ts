/**
 * Compose two-character strings from individual characters in an array.
 * Compexity: O(N^2)
 *
 * #strings #loops
 */

function stringConcat(array: string[]): string[] {
  const result: string[] = [];

  array.forEach((letter) => {
    array.forEach((secondLetter) => {
      if (letter !== secondLetter) {
        result.push(letter + secondLetter);
      }
    });
  });

  return result;
}

//
//

describe('string concat', () => {
  test('should return correct result', () => {
    const array = ['a', 'b', 'c', 'd'];
    const result = stringConcat(array);

    expect(result).toEqual(['ab', 'ac', 'ad', 'ba', 'bc', 'bd', 'ca', 'cb', 'cd', 'da', 'db', 'dc']);
  });
});
