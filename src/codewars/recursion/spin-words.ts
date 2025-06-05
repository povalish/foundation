/**
 * Write a function that takes in a string of one or more words, and returns
 * the same string, but with all words that have five or more letters reversed
 * (Just like the name of this Kata). Strings passed in will consist of only
 * letters and spaces. Spaces will be included only when more than one word is present.
 *
 * Examples:
 * "Hey fellow warriors"  --> "Hey wollef sroirraw"
 * "This is a test        --> "This is a test"
 * "This is another test" --> "This is rehtona test"
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #recursion
 */

function spinWords(s: string): string {
  const words = s.split(' ');

  return words
    .map((word) => {
      if (word.length >= 5) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
          reversed += word[i];
        }
        return reversed;
      }

      return word;
    })
    .join(' ');
}

//
//

describe('Stop gninnipS My sdroW!', () => {
  test('should return "Hey wollef sroirraw"', () => {
    const s = 'Hey fellow warriors';
    const result = spinWords(s);
    expect(result).toEqual('Hey wollef sroirraw');
  });

  test('should return "This is a test"', () => {
    const s = 'This is a test';
    const result = spinWords(s);
    expect(result).toEqual('This is a test');
  });

  test('should return "This is a test"', () => {
    const s = 'This is a test';
    const result = spinWords(s);
    expect(result).toEqual('This is a test');
  });
});
